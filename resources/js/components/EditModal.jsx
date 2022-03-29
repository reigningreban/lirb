import {useState} from "react";
import Modal from "react-modal"
import {useForm, usePage} from "@inertiajs/inertia-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
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


export default function EditModal(props) {
    const { errors } = usePage().props
    const [image, setImage] = useState(props.post.imagelink);
    const [state, setState] = useState({
        fullScreen: false,
    });
    const { data, setData, post, progress, processing, reset } = useForm({
        id: props.post.id,
        title: props.post.title,
        image: "",
        body: props.post.body,
    });
    function handleUpload(e) {
        let file = e.target.files[0];
        setData('image', file);
        setImage(URL.createObjectURL(file));
    }

    function submit(e) {
      e.preventDefault()
      let response = post(`/post/update`, {
        onSuccess: () => {
            reset();
            props.cancel();
        },
      });
    }

    function toggleFullScreen(e) {
        setState(state => ({
            ...state,
            fullScreen: !state.fullScreen,
        }));
    }

    return(
        <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Edit Post Modal">
            <div className={state.fullScreen ? "w-[95vw]" : "w-[80vw] sm:w-[40vw]"}>
                <div className="grid grid-cols-2">
                    <div>
                        <button className="text-green-500 hover:text-green-600 hover:scale-110 ease-in-out duration-300" onClick={toggleFullScreen}>
                            {
                                state.fullScreen?
                                <FontAwesomeIcon size="lg" icon={faDownLeftAndUpRightToCenter}/>
                                :
                                <FontAwesomeIcon size="lg" icon={faUpRightAndDownLeftFromCenter}/>
                            }
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button className="text-red-500 hover:text-red-600 hover:scale-110 ease-in-out duration-300 font-black" title="close" onClick={props.cancel}><FontAwesomeIcon size="lg" icon={faXmark}/></button>
                    </div>
                </div>
                <h2 className="font-bold text-3xl text-center border-b-2 border-blue-600">Edit post</h2>
                <form action="" onSubmit={submit}>
                    <div className="my-5">
                        <input type="text" className="w-full p-3 rounded border border-gray-400" placeholder="Title..." value={data.title} onChange={e => setData('title', e.target.value)} />
                        {errors.title && <div className="text-red-500 text-xs absolute">{errors.title}</div>}
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
                        {errors.image && <div className="text-red-500 text-xs absolute">{errors.image}</div>}
                    </div>
                    <div className="mb-5">
                        <TextEditor value={data.body} setValue={e => setData('body', e)}/>
                        {errors.body && <div className="text-red-500 text-xs absolute">{errors.body}</div>}
                    </div>
                    <div className="mb-5">
                      <button className={`py-3 text-white w-full rounded ${processing ? "bg-blue-200" : "bg-blue-600"}`} disabled={processing}>Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
