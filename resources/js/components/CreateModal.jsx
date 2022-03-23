import react, {useState} from "react";
import Modal from "react-modal"
import {useForm} from "@inertiajs/inertia-react"
import TextEditor from "./TextEditor";

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',

    transform: 'translate(-50%, -50%)',
  },
};


export default function CreateModal(props) {
    const [image, setImage] = useState(null);
    const { data, setData, post, progress } = useForm({
      title: "",
      image: "",
      body: "",
    });
    function handleUpload(e) {
        let file = e.target.files[0];
        setData('image', file)
        setImage(URL.createObjectURL(file))
    }

    function submit(e) {
      e.preventDefault()
      post('/post/create')
    }
    console.log(data);
    return(
        <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Create Post Modal">
            <div>
                <div className="flex justify-end w-[80vw] sm:w-[40vw]">
                    <button className="text-red-600 font-black text-4xl" title="close" onClick={props.closeModal}>&times;</button>
                </div>
                <h2 className="font-bold text-3xl text-center border-b-2 border-blue-600">Create a new post</h2>
                <form action="">
                    <div className="my-5">
                        <input type="text" className="w-full p-3 rounded border border-gray-400" placeholder="Title..." value={data.title} onChange={e => setData('title', e.target.value)} />
                    </div>
                    <div className="mb-5 cursor-pointer bg-center bg-no-repeat bg-auto" onClick={() => {document.getElementById("file").click()}} style={image ? {backgroundImage: `url(${image})`} : {}}>
                        <div className="rounded border border-gray-500 h-40 py-5 flex justify-center items-center">
                            <div className="">
                                <img src="/images/upload.svg" alt="upload" />
                            </div>
                        </div>
                        <input id="file" type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                        {progress && (
                          <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                          </progress>
                        )}
                    </div>
                    <div className="mb-5">
                        <TextEditor value={data.body} setValue={e => setData('body', e)} />
                    </div>
                </form>
            </div>
        </Modal>
    )
}
