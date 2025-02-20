// import { exec } from 'child_process';
// import os from 'os';

// /**
//  * Detect USB drives on Windows, Linux, and macOS.
//  * @returns {Promise<Array<{ name: string, path: string }>>}
//  */
// function detectUSBDrives() {
//   return new Promise((resolve, reject) => {
//     const platform = os.platform();
//     let command;

//     if (platform === 'win32') {
//       // Windows: Use `wmic` to list logical disks
//       command = 'wmic logicaldisk where drivetype=2 get deviceid, volumename';
//     } else if (platform === 'linux') {
//       // Linux: Use `lsblk` to list removable drives
//       command = 'lsblk -o NAME,LABEL -n -l -d -e 7,11';
//     } else if (platform === 'darwin') {
//       // macOS: Use `diskutil` to list external drives
//       command = 'diskutil list external';
//     } else {
//       reject(new Error('Unsupported platform'));
//     }

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//         return;
//       }

//       if (stderr) {
//         reject(new Error(stderr));
//         return;
//       }

//       const drives = parseDrives(stdout, platform);
//       resolve(drives);
//     });
//   });
// }

// /**
//  * Parse the output of the command based on the platform.
//  * @param {string} output - Command output.
//  * @param {string} platform - Platform (win32, linux, darwin).
//  * @returns {Array<{ name: string, path: string }>}
//  */
// // function parseDrives(output, platform) {
// //   const drives = [];

// //   if (platform === 'win32') {
// //     // Windows: Parse `wmic` output
// //     const lines = output.split('\n').filter(line => line.trim() !== '');
// //     for (let i = 1; i < lines.length; i++) {
// //       const [deviceId, volumeName] = lines[i].split(/\s+/);
// //       drives.push({
// //         name: volumeName || 'Untitled',
// //         path: deviceId,
// //       });
// //     }
// //   } else if (platform === 'linux') {
// //     // Linux: Parse `lsblk` output
// //     const lines = output.split('\n').filter(line => line.trim() !== '');
// //     for (const line of lines) {
// //       const [name, label] = line.split(/\s+/);
// //       drives.push({
// //         name: label || 'Untitled',
// //         path: `/dev/${name}`,
// //       });
// //     }
// //   } else if (platform === 'darwin') {
// //     // macOS: Parse `diskutil` output
// //     const lines = output.split('\n').filter(line => line.trim() !== '');
// //     for (const line of lines) {
// //       if (line.includes('external')) {
// //         const [name, path] = line.split(/\s+/);
// //         drives.push({
// //           name: name || 'Untitled',
// //           path: `/dev/${name}`,
// //         });
// //       }
// //     }
// //   }

// //   return drives;
// // }

// // module.exports = { detectUSBDrives };

// function parseDrives(output, platform) {
//     const drives = [];

//     if (platform === 'win32') {
//       // Windows: Parse `wmic` output
//       const lines = output.split('\n').filter(line => line.trim() !== '');
//       for (let i = 1; i < lines.length; i++) {
//         const [deviceId, volumeName] = lines[i].split(/\s+/);
//         drives.push({
//           name: volumeName || 'Untitled',
//           path: deviceId,
//         });
//       }
//     } else if (platform === 'linux') {
//       // Linux: Parse `lsblk` output
//       const lines = output.split('\n').filter(line => line.trim() !== '');
//       for (const line of lines) {
//         const [name, label] = line.split(/\s+/);
//         drives.push({
//           name: label || 'Untitled',
//           path: `/dev/${name}`,
//         });
//       }
//     } else if (platform === 'darwin') {
//       // macOS: Parse `diskutil` output
//       const lines = output.split('\n').filter(line => line.trim() !== '');
//       for (const line of lines) {
//         if (line.includes('external')) {
//           const [name] = line.split(/\s+/); // Removed unused `path` variable
//           drives.push({
//             name: name || 'Untitled',
//             path: `/dev/${name}`,
//           });
//         }
//       }
//     }

//     return drives;
//   }

// module.exports = { detectUSBDrives };

import { exec } from 'child_process'
import os from 'os'

/**
 * Detect USB drives on Windows, Linux, and macOS.
 * @returns {Promise<Array<{ name: string, path: string }>>}
 */
export function detectUSBDrives() {
  return new Promise((resolve, reject) => {
    const platform = os.platform()
    let command

    if (platform === 'win32') {
      // Windows: Use `wmic` to list logical disks
      command = 'wmic logicaldisk where drivetype=2 get deviceid, volumename'
    } else if (platform === 'linux') {
      // Linux: Use `lsblk` to list removable drives
      command = 'lsblk -o NAME,LABEL -n -l -d -e 7,11'
    } else if (platform === 'darwin') {
      // macOS: Use `diskutil` to list external drives
      command = 'diskutil list external'
    } else {
      reject(new Error('Unsupported platform'))
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }

      if (stderr) {
        reject(new Error(stderr))
        return
      }

      const drives = parseDrives(stdout, platform)
      resolve(drives)
    })
  })
}

/**
 * Parse the output of the command based on the platform.
 * @param {string} output - Command output.
 * @param {string} platform - Platform (win32, linux, darwin).
 * @returns {Array<{ name: string, path: string }>}
 */
function parseDrives(output, platform) {
  const drives = []

  if (platform === 'win32') {
    // Windows: Parse `wmic` output
    const lines = output.split('\n').filter((line) => line.trim() !== '')
    for (let i = 1; i < lines.length; i++) {
      const [deviceId, volumeName] = lines[i].split(/\s+/)
      drives.push({
        name: volumeName || 'Untitled',
        path: deviceId
      })
    }
  } else if (platform === 'linux') {
    // Linux: Parse `lsblk` output
    const lines = output.split('\n').filter((line) => line.trim() !== '')
    for (const line of lines) {
      const [name, label] = line.split(/\s+/)
      drives.push({
        name: label || 'Untitled',
        path: `/dev/${name}`
      })
    }
  } else if (platform === 'darwin') {
    // macOS: Parse `diskutil` output
    const lines = output.split('\n').filter((line) => line.trim() !== '')
    for (const line of lines) {
      if (line.includes('external')) {
        const [name] = line.split(/\s+/) // Removed unused `path` variable
        drives.push({
          name: name || 'Untitled',
          path: `/dev/${name}`
        })
      }
    }
  }

  return drives
}
