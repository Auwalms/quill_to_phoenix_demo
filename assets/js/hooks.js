//import Quill from 'quill';
//uncomment the above line if you added quill to the project using npm

let Hooks = {};

Hooks.QuillEditor = {
	mounted() {
		this.initializeQuill();
	},
	updated() {
		this.initializeQuill();
	},
	initializeQuill() {


		this.quill = new Quill('#editor-container', {
			theme: 'snow',
			placeholder: 'Type your content here...',
			modules: {
				//customization happens here
			}
		});

		// Optional: Push content change events
		this.quill.on('text-change', () => {
			let content = this.quill.root.innerHTML;
			var hiddenInput = document.getElementById('hidden-content');
			hiddenInput.value = content;
		});
	}
};

export default Hooks;