document.addEventListener('DOMContentLoaded', () => {
    const formatSelect = document.getElementById('format');
    const convertButton = document.getElementById('convert-button');
    const copyButton = document.getElementById('copy-button');
    const resultArea = document.getElementById('result');
    const farmList = document.getElementById('farm-list');
    const extraInputsDirt = document.getElementById('extra-inputs-dirt');
    const extraInputsPlant = document.getElementById('extra-inputs-plant');
    const idDoorInputDirt = document.getElementById('id-door-dirt');
    const idDoorInputPlant = document.getElementById('id-door-plant');
    const itemIdInputPlant = document.getElementById('item-id-plant');
    const discordButton = document.getElementById('discord-button');

    formatSelect.addEventListener('change', () => {
        const format = formatSelect.value;

        // Hide all extra input sections first
        extraInputsDirt.classList.add('hidden');
        extraInputsPlant.classList.add('hidden');

        if (format.startsWith('dirt')) {
            extraInputsDirt.classList.remove('hidden');
        } else if (format.startsWith('plant')) {
            extraInputsPlant.classList.remove('hidden');
        }
    });

    convertButton.addEventListener('click', () => {
        const format = formatSelect.value;
        const list = farmList.value.split('\n').filter(Boolean);
        let result = '';

        switch (format) {
            case 'horizontal':
                result = `{${list.map(item => `"${item}"`).join(', ')}}`;
                break;
            case 'vertical':
                result = list.map(item => `{"${item}"}`).join(',\n');
                break;
            case 'dirt1':
                result = list.map(item => `"${item}|${idDoorInputDirt.value}"`).join(',\n');
                break;
            case 'dirt2':
                result = list.map(item => `${item}|${idDoorInputDirt.value}`).join('\n');
                break;
            case 'plant1':
                result = list.map(item => `"${item}:${idDoorInputPlant.value}:${itemIdInputPlant.value}"`).join(',\n');
                break;
            case 'plant2':
                result = list.map(item => `${item}:${idDoorInputPlant.value}:${itemIdInputPlant.value}`).join('\n');
                break;
        }

        resultArea.value = result;
    });

    copyButton.addEventListener('click', () => {
        resultArea.select();
        document.execCommand('copy');
    });

    discordButton.addEventListener('click', () => {
        window.location.href = 'https://discord.com/invite/A5UzKE6vuq';
    });
});
