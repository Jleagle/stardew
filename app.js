document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = document.getElementById('tree-container');
    const toggleFilterBtn = document.getElementById('toggle-filter');
    
    let completedTasks = JSON.parse(localStorage.getItem('stardew_completed_tasks')) || {};
    let wasDragging = false;
    // Default root node to checked if not already set
    if (completedTasks['inherit_farm'] === undefined) {
        completedTasks['inherit_farm'] = true;
    }

    let hideCompleted = localStorage.getItem('stardew_hide_completed') === 'true';

    // Initial button state
    if (hideCompleted) {
        toggleFilterBtn.classList.add('active');
        treeContainer.classList.add('hide-completed');
    }

    // Transform flat data to nested tree
    function buildTree(data) {
        const tree = [];
        const mappedArr = {};

        data.forEach(item => {
            mappedArr[item.id] = { ...item, children: [] };
        });

        for (const id in mappedArr) {
            const item = mappedArr[id];
            if (item.parentId) {
                if (mappedArr[item.parentId]) {
                    mappedArr[item.parentId].children.push(item);
                }
            } else {
                tree.push(item);
            }
        }
        return tree;
    }

    // Check if a branch is fully complete
    function isBranchComplete(node) {
        const isSelfComplete = !!completedTasks[node.id];
        if (!isSelfComplete) return false;
        
        if (node.children.length === 0) return true;
        
        return node.children.every(child => isBranchComplete(child));
    }

    // Render tree recursively
    function renderTree(nodes) {
        const ul = document.createElement('ul');
        let visibleChildrenCount = 0;

        nodes.forEach(node => {
            const isFullBranchDone = isBranchComplete(node);
            
            // Skip rendering this node and its children if the branch is done and filtering is on
            if (isFullBranchDone && hideCompleted) {
                return;
            }

            visibleChildrenCount++;
            const li = document.createElement('li');
            const isDone = !!completedTasks[node.id];

            const card = document.createElement('div');
            card.className = `node-card ${isDone ? 'completed' : ''}`;
            card.innerHTML = `
                <label>
                    <span class="checkbox-custom"></span>
                    <span class="label-text">${node.label}</span>
                </label>
            `;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                if (wasDragging) {
                    return;
                }
                toggleTask(node.id);
            });

            li.appendChild(card);

            if (node.children && node.children.length > 0) {
                const childUl = renderTree(node.children);
                
                // Only append the child UL if it has visible children
                if (childUl.getAttribute('data-visible-children') !== '0') {
                    li.appendChild(childUl);
                }
            }

            ul.appendChild(li);
        });
        
        ul.setAttribute('data-visible-children', visibleChildrenCount);
        return ul;
    }

    function toggleTask(id) {
        completedTasks[id] = !completedTasks[id];
        localStorage.setItem('stardew_completed_tasks', JSON.stringify(completedTasks));
        updateView();
    }

    function updateView() {
        treeContainer.innerHTML = '';
        const treeData = buildTree(stardewTasks);
        const treeElement = document.createElement('div');
        treeElement.className = 'tree';
        treeElement.appendChild(renderTree(treeData));
        treeContainer.appendChild(treeElement);
    }

    toggleFilterBtn.addEventListener('click', () => {
        hideCompleted = !hideCompleted;
        localStorage.setItem('stardew_hide_completed', hideCompleted);
        
        if (hideCompleted) {
            toggleFilterBtn.classList.add('active');
            treeContainer.classList.add('hide-completed');
        } else {
            toggleFilterBtn.classList.remove('active');
            treeContainer.classList.remove('hide-completed');
        }
        updateView();
    });

    updateView();

    // Drag to pan logic for desktop (mouse events), with click protection for mobile and desktop
    const mainElement = document.querySelector('main');
    let isDragging = false;
    let startX = 0, startY = 0;
    let scrollStartX = 0, scrollStartY = 0;

    const onPointerMove = (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        // A threshold of 5 pixels to distinguish drag from tap/click
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            wasDragging = true;
        }

        // Only scroll manually for mouse events; let mobile browsers scroll natively
        if (wasDragging && e.pointerType === 'mouse') {
            mainElement.scrollLeft = scrollStartX - dx;
            mainElement.scrollTop = scrollStartY - dy;
        }
    };

    const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;

        if (e.pointerType === 'mouse') {
            mainElement.classList.remove('dragging');
        }

        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', endDrag);
        window.removeEventListener('pointercancel', endDrag);

        // Keep wasDragging active for a tick to allow the click handler to intercept it
        setTimeout(() => {
            wasDragging = false;
        }, 50);
    };

    mainElement.addEventListener('pointerdown', (e) => {
        // Only trigger drag behavior if clicking on empty space or node cards.
        // Don't drag if clicking buttons, links, etc.
        if (e.target.closest('button, input, select, textarea, a')) {
            return;
        }

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        scrollStartX = mainElement.scrollLeft;
        scrollStartY = mainElement.scrollTop;
        wasDragging = false;

        if (e.pointerType === 'mouse') {
            mainElement.classList.add('dragging');
        }

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', endDrag);
        window.addEventListener('pointercancel', endDrag);
    });
});
