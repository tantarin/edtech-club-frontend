import { useState, useEffect } from "react";
import UploadService from "../../services/FileUploadService";
import IFile from "../../types/File";

interface ImageUploadProps {
    onChange: (file: File) => void; // Функция обратного вызова для передачи выбранного файла родительскому компоненту
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
    const [currentImage, setCurrentImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        setCurrentImage(selectedFiles?.[0]);
        setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
        setProgress(0);
        const currentImage = selectedFiles?.[0];
        onChange(currentImage);
    };

    const upload = () => {
        setProgress(0);
        if (!currentImage) return;

        UploadService.upload(currentImage, (event: any) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
            //    return UploadService.getFiles();
            })
            .then((files) => {
             //   setImageInfos(files.data);
            })
            .catch((err) => {
                setProgress(0);

                if (err.response && err.response.data && err.response.data.message) {
                    setMessage(err.response.data.message);
                } else {
                    setMessage("Could not upload the Image!");
                }

                setCurrentImage(undefined);
            });
    };

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <label className="inline-block text-white bg-blue-700 py-2.5 px-3 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={selectImage}
                            style={{ display: 'none' }}
                        />
                        Загрузить изображение
                    </label>
                </div>
            </div>

            {currentImage && progress > 0 && (
                <div className="progress my-3">
                    <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: progress + "%" }}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            {previewImage && (
                <div>
                    <img className="preview" src={previewImage} alt="" />
                </div>
            )}

            {message && (
                <div className="alert alert-secondary mt-3" role="alert">
                    {message}
                </div>
            )}

            {imageInfos.length > 0 && (
                <div className="card mt-3">
                    <div className="card-header">List of Images</div>
                    <ul className="list-group list-group-flush">
                        {imageInfos.map((img, index) => (
                            <li className="list-group-item" key={index}>
                                <p>
                                    <a href={img.url}>{img.name}</a>
                                </p>
                                <img src={img.url} alt={img.name} height="80px" />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;