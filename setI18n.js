const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');

const init = async () => {
    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet('17zwZn2LFN0bZ6nM5paudpM88ivBX3uutBJMRlBfajyY');

    await doc.useServiceAccountAuth(require('./google-creds.json'));

    // await doc.useServiceAccountAuth({
    //     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    //     private_key: process.env.GOOGLE_PRIVATE_KEY,
    //   });

    // doc.useApiKey('AIzaSyA55TcUYs-J-tDd5rKZOOBEE9ImLwPMdyA');


    await doc.loadInfo(); // loads document properties and worksheets

    console.log(doc.title);

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log('sheet title:', sheet.title);

    sheet.loadCells()

    //const rows = await sheet.getRows();
    await sheet.loadCells();
    
    let maxIdx, i18n = {}, langsAcronym=['key'], rowIdx;
    for (maxIdx=2 ; sheet.getCell(1, maxIdx).value != null ; maxIdx++){
        langsAcronym.push(sheet.getCell(1, maxIdx).value);
        i18n[sheet.getCell(1, maxIdx).value] = {
            lang: sheet.getCell(0, maxIdx).value,
            map:{}
        }
    }

    for (rowIdx=2 ; sheet.getCell(rowIdx, 1).value != null ; rowIdx++){
        const key = sheet.getCell(rowIdx, 1).value;
        for (let cellIdx = 1 ; cellIdx < langsAcronym.length ; cellIdx++){
            i18n[langsAcronym[cellIdx]].map[key] = sheet.getCell(rowIdx, cellIdx+1).value
        }
    }

    fs.writeFileSync('./src/config/i18nMap.js', `export const i18n = ${JSON.stringify(i18n)}`);
  //  fs.writeFileSync('./server/i18nMap.json', JSON.stringify(i18n));
    console.log('i18nMap created successfully', langsAcronym.join(','), 'translated rows:', rowIdx-2);
}

init();
