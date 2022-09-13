// nodemailer 라이브러리 사용
// 구글에 npm install nodemailer 검색
const nodemailer = require('nodemailer');	

// mailtrap 사용
const email = {
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "108afe30b406c7",
		pass: "8a9bfc02399cb9"
	}
};

const send = async (option) => {
	nodemailer.createTransport(email).sendMail(option, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log(info);
			return info.response;
		}
	});
};

let emailData = {
	from: 'wjdvlf1407@gmail.com',
	to: 'wjdvlf1407@gmail.com',
	subject: '테스트메일입니다.',	// 제목
	text: 'node.js 테스트중'		// 메일내용

}

send(emailData);
