module.exports = {
    init(providerOptions) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config(providerOptions);
        //const {Image} = require('cloudinary-core');       
        return {
            upload(file) {
                cloudinary.uploader.upload(`remote_backend/${file}`, {
                    cloud_name: 'dc6apsdtu',
                    api_key: '137939413133749',
                    api_secret: '8hFdOpghWmm208SxHFubOX8ZcfE',
                    public_id: `${file.name}`,
                    tags: 'auto_upload',
                    upload_preset: 'remote_backend',
                    folder: 'public/uploads',
                    type: 'upload'
                }, function(error, result) {
                    console.log(result);
                });
            },
            
        };
    },
};
