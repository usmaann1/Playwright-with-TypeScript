const fs = require('fs').promises;
const path = require('path');

async function cleanAndWriteFile(newData) {
    try {
        let fileExists = false;
        try {
            await fs.access(outputFilePath);
            fileExists = true;
        } catch (err) {
            fileExists = false;
        }

        if (fileExists) {
            const fileContent = await fs.readFile(outputFilePath, 'utf8');
            if (fileContent.trim()) {
                console.log('File has data. Cleaning the file...');
                await fs.writeFile(outputFilePath, '');
            }
        }                                                                                                               

        await fs.writeFile(outputFilePath, JSON.stringify(newData, null, 2), 'utf8');

    } catch (err) {
        console.error('Error:', err);
    }
}


const transformerFunction = (input) => {
    const entries = input.split('#$##');
    return entries
        .map(entry => entry.trim())
        .filter(entry => entry !== '')
        .map(entry => entry.replace(/^####\s*/, '').trim());
};


const filePath = path.join(__dirname, 'string.txt');
const outputFilePath = path.join(__dirname, 'output.json');

async function run() {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const transformed = transformerFunction(fileContent);
        await cleanAndWriteFile(transformed);
    } catch (err) {
        console.error('Error reading or processing the file:', err);
    }
}

run();
