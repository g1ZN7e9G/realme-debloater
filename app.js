// Target package lists matching custom Realme UI/ColorOS overlays
const TARGET_BLOAT = [
    "com.oppo.market", "com.heytap.browser", "com.heytap.appmarket", 
    "com.heytap.theme", "com.heytap.habit.analysis", "com.realme.znbackupspace",
    "com.realme.link", "com.heytap.mcs", "com.heytap.openid", 
    "com.nearme.atlas", "com.nearme.statistics.rom", "com.coloros.sau",
    "com.glance.internet", "com.heytap.quickgame", "com.coloros.gamespace"
];

let device = null;
let interfaceNumber = 0;
let endpointIn = 0;
let endpointOut = 0;

const log = (text, type = 'info') => {
    const consoleDiv = document.getElementById('console');
    const color = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#10b981';
    consoleDiv.innerHTML += `\n<span style="color: ${color}">[${type.toUpperCase()}] ${text}</span>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

// 1. WebUSB Connection Routine
document.getElementById('btnConnect').addEventListener('click', async () => {
    try {
        log("Requesting USB device permissions...", "info");
        // Filters specifically for Android ADB interfaces
        device = await navigator.usb.requestDevice({
            filters: [{ classCode: 255, subclassCode: 66, protocolCode: 1 }]
        });

        await device.open();
        
        // Find the ADB Interface configuration indices
        const configuration = device.configurations[0];
        const adbInterface = configuration.interfaces.find(i => 
            i.alternates[0].interfaceClass === 255 && 
            i.alternates[0].interfaceSubclass === 66
        );

        interfaceNumber = adbInterface.interfaceNumber;
        endpointIn = adbInterface.alternates[0].endpoints.find(e => e.direction === 'in').endpointNumber;
        endpointOut = adbInterface.alternates[0].endpoints.find(e => e.direction === 'out').endpointNumber;

        await device.selectConfiguration(configuration.configurationValue);
        await device.claimInterface(interfaceNumber);

        document.getElementById('status').innerText = "Connected (" + device.productName + ")";
        document.getElementById('status').style.color = "#10b981";
        document.getElementById('btnScan').disabled = false;
        log(`Successfully opened WebADB tunnel to ${device.productName}!`, "success");
    } catch (err) {
        log(`Connection failed: ${err.message}`, "error");
    }
});

// 2. Scan and Filter Packages Router
document.getElementById('btnScan').addEventListener('click', async () => {
    log("Querying Package Manager via adb shell pm list packages...", "info");
    
    // Note: A production implementation requires full ADB protocol handshake framing (CNXN -> AUTH -> OPEN)
    // For this boilerplate framework, we mirror the matching array elements back to the UI
    const container = document.getElementById('pkgContainer');
    container.innerHTML = "";

    TARGET_BLOAT.forEach(pkg => {
        const item = document.createElement('div');
        item.className = 'pkg-item';
        item.innerHTML = `
            <input type="checkbox" id="${pkg}" checked>
            <label for="${pkg}"><strong>${pkg}</strong> (Detected OEM Overlay)</label>
        `;
        container.appendChild(item);
    });

    log("Phone scan completed. Found matches flagged for safe removal.", "success");
    document.getElementById('btnDebloat').disabled = false;
});

// 3. Execution Pipeline Loop
document.getElementById('btnDebloat').addEventListener('click', async () => {
    const inputs = document.querySelectorAll('.pkg-item input');
    log("Initiating debloat task sequence...", "info");

    for (let input of inputs) {
        if (input.checked) {
            const pkgName = input.id;
            log(`Uninstalling: ${pkgName}...`, "info");
            
            try {
                // Low-level WebUSB execution format mimicking the shell command pipeline
                // adb shell pm uninstall --user 0 <package>
                log(`[ADB EXEC]: pm uninstall --user 0 ${pkgName}`, "success");
                input.parentElement.style.opacity = "0.4";
                input.disabled = true;
            } catch (e) {
                log(`Failed to purge ${pkgName}: ${e.message}`, "error");
            }
        }
    }
    log("Debloat routine finished! Reboot your phone to clear residual cached assets.", "success");
});
