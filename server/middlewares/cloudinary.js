import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path'
import { generateTimestamp } from "./Helper.js";


dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export const cloudinaryUpload = async (localFilePath, originalname) => {

  try {
    if (!localFilePath) return null;
    const fileExtension = path.extname(localFilePath);
    const time = generateTimestamp();
    const publicID = path.basename(originalname, fileExtension)+'_'+time;
    // const publicID = 'madara-pfp-8_2024Nov061758';

    let folderPath = '';
    if (fileExtension === '.pdf') {
      folderPath = 'Hospital/File';
    } else if (fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png') {
      folderPath = 'Hospital/Image';
    } else {
      return { message: 'Unsupported file type' }; 
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      public_id: publicID,
      resource_type: "auto",
      folder: folderPath,
    });
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); 
    }
    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); 
    }
    return null;
  }
};

export const extractPublicIdFromUrl = (url) => {
  const [, filePath] = url.split("/upload/");
  const publicId = filePath.split('/');
  const versionIndex = publicId.findIndex(part => part.startsWith("v"));
  if (versionIndex !== -1) {
    publicId.splice(versionIndex, 1);
  }
  const lastPartIndex = publicId.length - 1;
  publicId[lastPartIndex] = publicId[lastPartIndex].replace(/\.[^/.]+$/, "");
  const cleanPath = publicId.join("/");
  return decodeURIComponent(cleanPath);
};


export const DeleteFileFromCloudinary = async (Url) => {
    try {
    const publicId = extractPublicIdFromUrl(Url);
    console.log(publicId);
    
    const result = await cloudinary.uploader.destroy(publicId);
    
    if (result.result === "ok") {
      console.log('File successfully deleted from Cloudinary');
      return { message: 'File successfully deleted from Cloudinary' };
    } else {
      console.log('File deletion failed or file not found');
      return { message: 'File deletion failed or file not found' };
    }
  } catch (cloudinaryError) {
    console.error('Failed to delete file from Cloudinary', cloudinaryError);
    return { message: 'Error occurred while deleting the file from Cloudinary', error: cloudinaryError };
  }
};