// import fetch from 'node-fetch';

// const run = async () => {
//   const prompt = `
// Write Jest unit tests for the following JavaScript function:

// function add(a, b) {
//   return a + b;
// }

// Please return only the test code in valid Jest format. Do not include any other comments or code.
//   `;

//   try {
//     const response = await fetch('http://localhost:11434/api/generate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'llama3.2:latest',
//         prompt,
//         stream: false,
//       }),
//     });

//     const data = await response.json();

//     if (data.response) {
//       console.log('🧪 Jest Test Output:\n');
//       console.log(data.response.trim());
//     } else {
//       console.error('⚠️ Unexpected response format:', JSON.stringify(data, null, 2));
//     }
//   } catch (error) {
//     console.error('❌ Error contacting Ollama:', error.message);
//   }
// };

// run();



// import fetch from 'node-fetch';
// import fs from 'fs';
// import path from 'path';

// const run = async () => {
//   const prompt = `
// Write Jest unit tests for the following JavaScript function:

// function add(a, b) {
//   return a + b;
// }

// Please return only the test code in valid Jest format. Do not include any other comments or code.
//   `;

//   try {
//     const response = await fetch('http://localhost:11434/api/generate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'llama3.2:latest',
//         prompt,
//         stream: false,
//       }),
//     });

//     const data = await response.json();

//     if (data.response) {
//       const testCode = data.response.trim();

//       // 📝 Save test file in the same directory, but without directory path
//       const outputFileName = path.basename('add.test.js');

//       // 💾 Save the test code to the file
//       fs.writeFileSync(outputFileName, testCode);
//       console.log(`✅ Jest test written to: ${outputFileName}`);
//     } else {
//       console.error('⚠️ Unexpected response format:', JSON.stringify(data, null, 2));
//     }
//   } catch (error) {
//     console.error('❌ Error contacting Ollama:', error.message);
//   }
// };

// run();


// import fetch from 'node-fetch';
// import fs from 'fs';
// import path from 'path';
// import chokidar from 'chokidar';

// // Watch for changes in .js or .ts files in the current directory (or specific directory, e.g., `src`)
// chokidar.watch('./src/**/*.{js,ts}', {
//   ignoreInitial: true, // Ignore the initial events when files are first added
// }).on('change', async (filePath) => {
//   console.log(`📝 Detected change in: ${filePath}`);

//   try {
//     // Read the file's content dynamically
//     const code = fs.readFileSync(filePath, 'utf-8');

//     // Construct the prompt dynamically using the actual content of the file
//     const prompt = `
// Write Jest unit tests for the following JavaScript or TypeScript function:

// ${code}

// Please return only the test code in valid Jest format. Do not include any other comments or code.
// `;

//     // Call your local API (Ollama or similar) to generate test code
//     const response = await fetch('http://localhost:11434/api/generate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'llama3.2:latest',
//         prompt,
//         stream: false,
//       }),
//     });

//     // Parse the response from the API
//     const data = await response.json();

//     if (data.response) {
//       const testCode = data.response.trim();

//       // Generate the output file name (replace .js/.ts with .test.js/.test.ts)
//       const outputFileName = path.basename(filePath).replace(/\.js$/, '.test.js').replace(/\.ts$/, '.test.ts');

//       // Write the generated Jest test code to the output file
//       fs.writeFileSync(outputFileName, testCode);
//       console.log(`✅ Jest test written to: ${outputFileName}`);
//     } else {
//       console.error('⚠️ Unexpected response format:', JSON.stringify(data, null, 2));
//     }
//   } catch (error) {
//     console.error('❌ Error contacting Ollama:', error.message);
//   }
// });




// import fetch from 'node-fetch';
// import fs from 'fs';
// import path from 'path';

// // Ensure the user passes a file to test via the command line
// const args = process.argv.slice(2);  // Get command line arguments
// const filePath = args[0];  // Get the first argument (file path)

// if (!filePath) {
//   console.error('❌ Please provide a JavaScript or TypeScript file path to test.');
//   process.exit(1);  // Exit if no file path is provided
// }

// const run = async () => {
//   try {
//     // Check if the provided file exists
//     if (!fs.existsSync(filePath)) {
//       console.error(`❌ The file ${filePath} does not exist.`);
//       process.exit(1);  // Exit if the file doesn't exist
//     }

//     // Read the file's content dynamically
//     const code = fs.readFileSync(filePath, 'utf-8');

//     // Construct the prompt dynamically using the actual content of the file
//     const prompt = `
// Write Jest unit tests for the following JavaScript or TypeScript function:

// ${code}

// Please return only the test code in valid Jest format. Do not include any other comments or code.
// `;

//     // Call your local API (Ollama or similar) to generate test code
//     const response = await fetch('http://localhost:11434/api/generate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'llama3.2:latest',
//         prompt,
//         stream: false,
//       }),
//     });

//     // Parse the response from the API
//     const data = await response.json();

//     if (data.response) {
//       const testCode = data.response.trim();

//       // Generate the output file name (replace .js/.ts with .test.js/.test.ts)
//       const outputFileName = path.basename(filePath).replace(/\.js$/, '.test.js').replace(/\.ts$/, '.test.ts');

//       // Write the generated Jest test code to the output file
//       fs.writeFileSync(outputFileName, testCode);
//       console.log(`✅ Jest test written to: ${outputFileName}`);
//     } else {
//       console.error('⚠️ Unexpected response format:', JSON.stringify(data, null, 2));
//     }
//   } catch (error) {
//     console.error('❌ Error:', error.message);
//   }
// };

// run();


import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Capture the file path from command-line arguments
const args = process.argv.slice(2);
const filePath = args[0];
  console.log(filePath)
if (!filePath) {
  console.error('❌ Please provide a JavaScript or TypeScript file path to test.');
  process.exit(1);
}
const code = fs.readFileSync(filePath, 'utf-8');
 // console.log(`📄 Contents of ${filePath}:\n`);
  console.log(code);

const run = async () => {
  try {
    // Check if the provided file exists
    if (!fs.existsSync(filePath)) {
      console.error(`❌ The file ${filePath} does not exist.`);
      process.exit(1);
    }

    // Read the file's content dynamically
    const code = fs.readFileSync(filePath, 'utf-8');

    // Construct the prompt dynamically using the actual content of the file
    const prompt = `
Write Jest unit tests for the following JavaScript or TypeScript function:

${code}

Please return only the test code in valid Jest format. Do not include any other comments or code.
`;

    // Call your local API (Ollama or similar) to generate test code
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2:latest',
        prompt,
        stream: false,
      }),
    });

    // Parse the response from the API
    const data = await response.json();

    if (data.response) {
      const testCode = data.response.trim();

      // Generate the output file name (replace .js/.ts with .test.js/.test.ts)
      const outputFileName = path.basename(filePath).replace(/\.js$/, '.test.js').replace(/\.ts$/, '.test.ts');

      // Write the generated Jest test code to the output file
      fs.writeFileSync(outputFileName, testCode);
      console.log(`✅ Jest test written to: ${outputFileName}`);
    } else {
      console.error('⚠️ Unexpected response format:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error('❌ Error contacting Ollama:', error.message);
  }
};

run();
