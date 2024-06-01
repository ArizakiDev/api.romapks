exports.getTech = (req, res) => {
    const tech = ['apk', 'rom'];
    res.json(tech);
};

exports.getAvailableRoms = (req, res) => {
    const roms = ['MIUI14', 'MIUI13'];
    res.json(roms);
};

exports.getModelsByRom = (req, res) => {
    const rom = req.params.rom;
    const models = {
        MIUI14: ['RedmiNote13Pro+', 'Mi10', 'Mi11'],
        MIUI13: ['RedmiNote13Pro+', 'Mi10', 'Mi11']
    };

    if (models[rom]) {
        res.json(models[rom]);
    } else {
        res.status(404).json({ error: 'ROM not found' });
    }
};

//APK

exports.getAvailableVersions = (req, res) => {
    const versions = ['MIUI', 'HyperOS'];
    res.json(versions);
};

exports.getAvailableApps = (req, res) => {
    const versions = ['MIUI', 'HyperOS'];
    res.json(versions);
};

exports.downloadApk = (req, res) => {
    const version = req.params.version;
    const app = req.params.app;
    const downloadLink = `http://example.com/download/apk/${version.toLowerCase()}/${app.toLowerCase()}`;
    res.redirect(downloadLink);
};

exports.getRom = (req, res) => {
    const rom = req.params.rom;
    const model = req.params.model;
    const romData = {
        rom: rom,
        model: model,
        version: '14.0.1',
        downloadLink: `http://example.com/download/rom/${rom.toLowerCase()}/${model.toLowerCase()}`
    };
    res.json(romData);
};

exports.getApk = (req, res) => {
    const apk = req.params.apk;
    const model = req.params.model;
    const apkData = {
        apk: apk,
        model: model,
        version: '1.2.3',
        downloadLink: `http://example.com/download/apk/${apk.toLowerCase()}/${model.toLowerCase()}`
    };
    res.json(apkData);
};
