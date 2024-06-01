exports.getTech = (req, res) => {
    const tech = ['apk', 'rom'];
    res.json(tech);
};

exports.getAvailableRoms = (req, res) => {
    const roms = ['ONEUI4', 'ONEUI3'];
    res.json(roms);
};

exports.getModelsByRom = (req, res) => {
    const rom = req.params.rom;
    const models = {
        ONEUI4: ['SamsungA20e', 'GalaxyS21', 'GalaxyNote10'],
        ONEUI3: ['SamsungA20e', 'GalaxyS21', 'GalaxyNote10']
    };

    if (models[rom]) {
        res.json(models[rom]);
    } else {
        res.status(404).json({ error: 'ROM not found' });
    }
};

exports.getRom = (req, res) => {
    const rom = req.params.rom;
    const model = req.params.model;
    const romData = {
        rom: rom,
        model: model,
        version: '4.0.1',
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
        version: '3.4.5',
        downloadLink: `http://example.com/download/apk/${apk.toLowerCase()}/${model.toLowerCase()}`
    };
    res.json(apkData);
};
