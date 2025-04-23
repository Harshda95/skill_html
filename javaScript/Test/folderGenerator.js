const fs = require("fs");
const path = require("path");
const folderStructure = require('./input');

// ✅ Define the output directory
const OUTPUT_DIR = path.join(process.cwd(), "movie-finder-app");

// ✅ Function to create folders and files properly
const createStructure = (basePath, structure) => {
  Object.entries(structure).forEach(([folder, contents]) => {
    const folderPath = path.join(basePath, folder);

    console.log("Folder Path Before Creation.......", folderPath);
    
    if (folder !== "") {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`📁 Created folder: ${folderPath}`);
      }
    }

    if (contents._files) {
      contents._files.forEach((file) => {
        const filePath = path.join(folderPath, file);


        
        // ✅ Ensure parent folder exists before writing the file
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, "", "utf8");
          console.log(`📄 Created file: ${filePath}`);
        }
      });
    }

    // Recursively create subfolders
    Object.entries(contents).forEach(([subFolder, subContents]) => {
      if (subFolder !== "_files") {
        createStructure(folderPath, { [subFolder]: subContents });
      }
    });
  });
};

// ✅ Ensure `output` directory exists before generating structure
const generateProjectStructure = () => {
  console.log("🚀 Generating React project structure...");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created root folder: ${OUTPUT_DIR}`);
  }

  createStructure(OUTPUT_DIR, folderStructure);

  console.log("✅ React project structure created successfully in 'output' folder!");
};

// ✅ Run script
generateProjectStructure();