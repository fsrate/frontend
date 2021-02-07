'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const nodemailer = require('nodemailer');
module.exports = {
    async create(ctx) {
        const { Email } = ctx.request.body;
        const existingSub = await strapi.subscriber.services.find({ Email });
        if (!existingSub) {
            await strapi.subscriber.services.create({ Email });
            try {
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'admin@fs-rate.com',
                        pass: '@Cyaver123'
                    }
                });
                const mailOptions = {
                    from: 'cs@fs-rate.com',
                    to: `${Email}`,
                    subject: 'ยืนยันการทำรายการ',
                    text: `สวัสดี คุณ ${Email} เราได้รับคำสั่งองท่านแล้ว`
                };
                await transporter.sendMail(mailOptions);
            } catch (error) {
                console.log(error);
            }
        }
        return Email;
    }
};
