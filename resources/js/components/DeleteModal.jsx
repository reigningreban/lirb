import Modal from "react-modal"


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

export default function DeleteModal(props) {
    return(
        <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Create Post Modal">
            <div>
                <p>Are you sure you want to delete Post:</p>
                <p className="text-red-500 text-center py-5">{props.title}</p>
                <div className="grid grid-cols-2">
                    <div className="flex justify-start">
                        <button className="border border-gray-400 px-3 py-1 hover:bg-gray-100 rounded" onClick={props.cancel}>Cancel</button>
                    </div>
                    <div className="flex justify-end">
                        <button className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white" onClick={props.delete}>Delete</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
