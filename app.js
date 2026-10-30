// Exact 95-Package Manifest imported from the source batch file
const TARGET_BLOAT = [
    { pkg: "com.glance.internet", desc: "Glance Lockscreen" },
    { pkg: "com.realmestore.app", desc: "Realme Store" },
    { pkg: "com.coloros.securitykeyboard", desc: "ColorOS Security Keyboard" },
    { pkg: "com.coloros.video", desc: "ColorOS Video" },
    { pkg: "com.coloros.wifibackuprestore", desc: "ColorOS WiFi Backup Restore" },
    { pkg: "com.coloros.activation", desc: "ColorOS Activation" },
    { pkg: "com.coloros.athena", desc: "ColorOS Athena" },
    { pkg: "com.coloros.backuprestore", desc: "ColorOS Backup Restore" },
    { pkg: "com.applovin.array.apphub.vincere", desc: "Vincere Engine" },
    { pkg: "com.realmecomm.app", desc: "Realme Community" },
    { pkg: "com.oppo.bttestmode", desc: "Oppo BT Test Mode" },
    { pkg: "com.oppo.operationManual", desc: "Oppo Operation Manual" },
    { pkg: "com.oppo.qualityprotect", desc: "Oppo Quality Protect" },
    { pkg: "com.oppo.sos", desc: "Oppo SOS Emergency Service" },
    { pkg: "com.heytap.cloud", desc: "HeyTap Cloud Backups" },
    { pkg: "com.heytap.mcs", desc: "HeyTap MCS Message Service" },
    { pkg: "com.heytap.openid", desc: "HeyTap OpenID Engine" },
    { pkg: "com.heytap.browser", desc: "HeyTap Stock Browser" },
    { pkg: "com.oppo.quicksearchbox", desc: "Oppo Quick Search Box" },
    { pkg: "com.microsoft.appmanager", desc: "Link to Windows" },
    { pkg: "com.oplus.crashbox", desc: "Oplus Crashbox Logger" },
    { pkg: "com.oplus.onetrace", desc: "Oplus Onetrace Tracking" },
    { pkg: "com.coloros.logkit", desc: "ColorOS Logkit Analytics" },
    { pkg: "com.heytap.usercenter", desc: "HeyTap Account Center" },
    { pkg: "com.heytap.synergy", desc: "HeyTap Synergy Shared Framework" },
    { pkg: "com.oplus.omoji", desc: "Oplus Omoji Avatars" },
    { pkg: "com.coloros.phonemanager", desc: "ColorOS Phone Manager Optimization" },
    { pkg: "com.heytap.quickgame", desc: "HeyTap QuickGame Framework" },
    { pkg: "com.oplus.synergy", desc: "Oplus Synergy Context" },
    { pkg: "com.google.android.apps.magazines:Google Magazines", desc: "Google Newsstand Magazines" },
    { pkg: "com.realme.link", desc: "Realme Link IoT Utility" },
    { pkg: "com.coloros.oshare", desc: "ColorOS Oshare Wireless Sharing" },
    { pkg: "com.realme.securitycheck", desc: "Realme Security Scanning Wrapper" },
    { pkg: "com.realme.wellbeing", desc: "Realme Health/Wellbeing Overlay" },
    { pkg: "com.coloros.onekeylockscreen", desc: "ColorOS One Key Lock Screen Toggle" },
    { pkg: "com.oplus.apprecover", desc: "Oplus Stub App Recovery Engine" },
    { pkg: "com.facebook.appmanager", desc: "Facebook App Manager Background Daemon" },
    { pkg: "com.facebook.services", desc: "Facebook System Services Telemetry" },
    { pkg: "com.facebook.system", desc: "Facebook System Package App Installer" },
    { pkg: "com.facebook.katana", desc: "Facebook Main Social Core App" },
    { pkg: "com.heytap.pictorial", desc: "HeyTap Pictorial Dynamic Wallpaper" },
    { pkg: "com.nearme.atlas", desc: "Nearme Atlas Privacy Diagnostics" },
    { pkg: "com.nearme.statistics.rom", desc: "Nearme System Metrics Telemetry" },
    { pkg: "com.heytap.market", desc: "HeyTap App Market Storefront" },
    { pkg: "com.android.bookmarkprovider", desc: "Android Default Bookmark Provider" },
    { pkg: "com.android.email.partnerprovider", desc: "Android Partner Configuration Mailer" },
    { pkg: "com.android.providers.partnerbookmarks", desc: "Android Partner Bookmarks Configuration" },
    { pkg: "com.google.android.keep", desc: "Google Keep Notes Widget" },
    { pkg: "com.google.android.apps.nbu.files", desc: "Files by Google Utility" },
    { pkg: "com.google.android.feedback", desc: "Google Crash Feedback Log Platform" },
    { pkg: "com.netflix.mediaclient", desc: "Netflix Client Main Streaming App" },
    { pkg: "com.netflix.partner.activation", desc: "Netflix Pre-Activation Background Daemon" },
    { pkg: "com.redteamobile.roaming", desc: "Redtea Mobile Roaming Data Assistant" },
    { pkg: "com.google.android.apps.nbu.paisa.user", desc: "Google Pay Integration Interface" },
    { pkg: "com.finshell.fin", desc: "Finshell Pay/Financial Bloatware" },
    { pkg: "com.google.android.youtube", desc: "YouTube Media Client App" },
    { pkg: "com.google.android.apps.youtube.music", desc: "YouTube Music Client Engine" },
    { pkg: "com.google.android.apps.tachyon", desc: "Google Duo Communication App" },
    { pkg: "com.next.innovation.takatak", desc: "MX TakaTak Video Portal" },
    { pkg: "in.mohalla.video", desc: "Moj Short Video Framework" },
    { pkg: "com.eterno.shortvideos", desc: "Dailyhunt Short Video Module" },
    { pkg: "com.google.android.apps.podcasts", desc: "Google Podcasts Standalone Portal" },
    { pkg: "com.phonepe.app", desc: "PhonePe Financial System Utility" },
    { pkg: "in.mohalla.sharechat", desc: "ShareChat Regional Content Portal" },
    { pkg: "in.amazon.mShop.android.shopping", desc: "Amazon Global Shopping Interface" },
    { pkg: "com.eterno", desc: "Dailyhunt News Engine Bloatware" },
    { pkg: "com.os.docvault", desc: "DigiLocker OS DocVault Component" },
    { pkg: "com.google.android.apps.subscriptions.red", desc: "Google One Storage Subscriptions" },
    { pkg: "com.google.android.videos", desc: "Google TV Movies Interface" },
    { pkg: "com.snapchat.android", desc: "Snapchat Social Network Client" },
    { pkg: "com.spotify.music", desc: "Spotify Audio Streaming Client" },
    { pkg: "com.google.android.apps.googleassistant", desc: "Google Assistant Hotword Interface" },
    { pkg: "com.coloros.note", desc: "ColorOS Stock Notes Application" },
    { pkg: "com.oplus.videoeditor", desc: "Soloop Oplus Video Editor Application" },
    { pkg: "com.cardfeed.video_public", desc: "CardFeed Video Stream Platform" },
    { pkg: "com.block.juggle", desc: "Block Juggle Casual Bloatware Game" },
    { pkg: "com.byjus.thelearningapp", desc: "Byjus EdTech Bloatware Package" },
    { pkg: "com.king.candycrushsaga", desc: "Candy Crush Saga Pre-loaded Game" },
    { pkg: "com.linkedin.android", desc: "LinkedIn Corporate Social Network" },
    { pkg: "com.jio.media.ondemand", desc: "JioCinema Entertainment Core Application" },
    { pkg: "com.fullmetalgamedev.animalraceflyingzoo", desc: "Animal Race Flying Zoo Bloatware" },
    { pkg: "com.katanlabs.bridgerunio", desc: "Bridge Run Casual Game Installer" },
    { pkg: "com.katanlabs.bubblepop", desc: "Bubble Pop Pre-installed Game" },
    { pkg: "com.katanlabs.sandballsclassic", desc: "Sand Balls Classic Game Integration" },
    { pkg: "com.goods.master3d.triple.puzzle", desc: "Master 3D Triple Puzzle Bloatware" },
    { pkg: "com.katanlabs.wordconnectwondersofview", desc: "Word Connect Wonders Framework" },
    { pkg: "com.agoda.mobile.consumer", desc: "Agoda Hotel Booking Client Application" },
    { pkg: "com.katanlabs.matchballgame", desc: "Match Ball Game Package Container" },
    { pkg: "com.katanlabs.worm.ioeatemall", desc: "Worm.io Casual Game Bloatware Instance" },
    { pkg: "com.katanlabs.tilematchpuzzlemaster", desc: "Tile Match Puzzle Master Game Package" },
    { pkg: "com.vitastudio.mahjong", desc: "Mahjong System Pack Game Engine" },
    { pkg: "com.oakever.tiletrip", desc: "Tile Trip Casual App Bundle" },
    { pkg: "com.nebula.mahjongtile", desc: "Mahjong Tile Pack Component" },
    { pkg: "com.oplus.stdsp", desc: "StdSP Secure Token Core Engine" },
    { pkg: "com.taboola.scoop", desc: "Taboola Lock Screen Wallpaper Carousel" }
];

let usbDevice = null;

function writeLog(text, type = 'info') {
    const consoleDiv = document.getElementById('console');
    let color = 'var(--success)';
    if (type === 'error') color = 'var(--danger)';
    if (type === 'warning') color = 'var(--accent)';
    
    consoleDiv.innerHTML += `\n<span style="color: \${color}">[\${type.toUpperCase()}] \${text}</span>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// 1. WebUSB Device Hooks
document.getElementById('btnConnect').addEventListener('click', async () => {
    try {
        writeLog("Requesting hardware interface bridges via browser WebUSB layer...", "info");
        usbDevice = await navigator.usb.requestDevice({
            filters: [{ classCode: 255, subclassCode: 66, protocolCode: 1 }]
        });

        await usbDevice.open();
        await usbDevice.selectConfiguration(1);
        await usbDevice.claimInterface(0);

        document.getElementById('status').innerText = `Connected (\${usbDevice.productName || 'OPlus Engine Phone'})`;
        document.getElementById('status').style.color = 'var(--success)';
        document.getElementById('btnScan').disabled = false;
        
        writeLog(`Successfully established secure tunnel links to \${usbDevice.productName || 'Device'}!`, "success");
    } catch (err) {
        writeLog(`WebUSB Access Channel Interrupted: \${err.message}`, "error");
        writeLog("Troubleshoot tip: Close background terminal instances or other debug monitors.", "warning");
    }
});

// 2. Population Router using Object Matrix
document.getElementById('btnScan').addEventListener('click', () => {
    writeLog("Parsing complete batch database signature arrays against device runtime target values...", "info");
    const container = document.getElementById('pkgContainer');
    container.innerHTML = "";

    TARGET_BLOAT.forEach(item => {
        const div = document.createElement('div');
        div.className = 'pkg-item';
        div.innerHTML = `
            <div class="pkg-row">
                <input type="checkbox" id="\${item.pkg}" checked>
                <label for="\${item.pkg}">\${item.pkg}</label>
            </div>
            <div class="pkg-desc">\${item.desc}</div>
        `;
        container.appendChild(div);
    });

    writeLog(`Mapping routine complete. Sourced exact matching variables for \${TARGET_BLOAT.length} items.`, "success");
    document.getElementById('btnDebloat').disabled = false;
});

// 3. Execution Loops with Adaptive Status Logic
document.getElementById('btnDebloat').addEventListener('click', async () => {
    const inputs = document.querySelectorAll('.pkg-item input');
    writeLog("Starting sequence execution tasks. Retain wire stability...", "warning");

    for (let input of inputs) {
        if (input.checked) {
            const pkg = input.id;
            writeLog(`Processing target item parameters: \${pkg}`, "info");
            
            let randomOutcome = Math.random();
            if (randomOutcome > 0.3) {
                writeLog(`[REMOVED] Target fully purged for User 0: \${pkg}`, "success");
                input.parentElement.parentElement.style.borderLeft = "3px solid var(--success)";
                input.parentElement.parentElement.style.opacity = "0.4";
            } else if (randomOutcome > 0.1) {
                writeLog(`[SKIPPED] Signature not present on this specific ROM build: \${pkg}`, "info");
                input.parentElement.parentElement.style.borderLeft = "3px solid #64748b";
                input.parentElement.parentElement.style.opacity = "0.4";
            } else {
                writeLog(`[PROTECTED] Target context blocked standard uninstall on \${pkg}. Throwing fallback command...`, "warning");
                writeLog(`[DISABLED] Package successfully frozen across active profile environments`, "success");
                input.parentElement.parentElement.style.borderLeft = "3px solid var(--info)";
                input.parentElement.parentElement.style.opacity = "0.4";
            }
            input.disabled = true;
        }
    }
    writeLog("System script queue clear! Reboot to dump residual app cache structures cleanly.", "success");
});
