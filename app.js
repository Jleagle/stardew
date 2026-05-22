document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = document.getElementById('tree-container');
    const toggleFilterBtn = document.getElementById('toggle-filter');
    
    let completedTasks = JSON.parse(localStorage.getItem('stardew_completed_tasks')) || {};
    
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
        nodes.forEach(node => {
            const li = document.createElement('li');
            const isDone = !!completedTasks[node.id];
            const isFullBranchDone = isBranchComplete(node);

            if (isFullBranchDone) {
                li.classList.add('hidden-branch');
            }

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
                toggleTask(node.id);
            });

            li.appendChild(card);

            if (node.children && node.children.length > 0) {
                li.appendChild(renderTree(node.children));
            }

            ul.appendChild(li);
        });
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
});
