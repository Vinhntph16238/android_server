var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {



    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
    const studentInfo = {
        hovaten: 'vinhnt7',
        masinhvien: 'ph16238',
        phone: '123456789',
        email: 'vinhntph16238',
        nganh: 'MOB'
    };

    const data = `
    Name: ${studentInfo.hovaten}
    Student ID: ${studentInfo.masinhvien}
    Phone: ${studentInfo.phone}
    Email: ${studentInfo.email}
    Major: ${studentInfo.nganh}
    `;

    //tao file

    // fs.writeFile('thongtin.txt', data, 'utf8', (err) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log('File has been written successfully.');
    // });

    // them sinh vien ben canh

    fs.appendFile('thongtin.txt', data, 'utf8', function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('them sv thanh cong');
    });

    fs.appendFileSync('thongtin.txt', data, 'utf8');
    console.log('them thanh cong');


    // doi ten file 

    fs.rename('thongtin.txt', 'mssv.txt', function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Đổi tên tệp tin thành công từ thongtin.txt thành mssv.txt.');
    });


}).listen(8080);