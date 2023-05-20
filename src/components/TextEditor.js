import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { Icon, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TextEditor = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	return (
		<>
			<header className="flex justify-between items-center p-3 pb-1">
				<span className="cursor-pointer">
					{/* <Link to="/">
						<Icon name="description" color="blue" size="5xl" />
					</Link> */}
				</span>
				<div className="flex-grow px-2">
					<h2 className="">Name</h2>
					<div className="flex items-center overflow-x-scroll text-sm space-x-1 ml-1 text-gray-600">
						<p className="options">File</p>
						<p className="options">Edit</p>
						<p className="options">View</p>
						<p className="options">Insert</p>
						<p className="options">Format</p>
						<p className="options">Tools</p>
						<p className="options">Add-ons</p>
						<p className="options">Help</p>
					</div>
				</div>
				<Button
					size="regular"
					style={{ background: "#1A73E8" }}
					className="!bg-[#1A73E8] hover:bg-blue-500 !rounded-md md:inline-flex h-10"
					rounded={false}
					block={false}
					iconOnly={false}
					ripple="light"
					onClick={() => {
						// const stateToPdfMake = new StateToPdfMake(userDoc?.editorState);
						// // console.log(stateToPdfMake.generate());
						// pdfMake.vfs = pdfFonts.pdfMake.vfs;
						// pdfMake
						//   .createPdf(stateToPdfMake.generate())
						//   .download(`${userDoc?.name}.pdf`);
					}}
				>
					<Icon name="download" size="md" />
					<span>Download</span>
				</Button>
			</header>
			<div className="bg-[#f9f8fa] min-h-screen pb-16">
				<Editor
					editorState={editorState}
					onEditorStateChange={(e) => setEditorState(e)}
					toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto !border-0 !border-b-2 !border-[#ccc] shadow-md"
					editorClassName="mt-6 bg-white p-5 shadow-lg min-h-[1300px] max-w-5xl mx-auto mb-12 border-2 rounded-sm border-gray-300"
					editorStyle={{ minHeight: "1300px" }}
				/>
			</div>
		</>
	);
};

export default TextEditor;
