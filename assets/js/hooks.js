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
		const toolbarOptions = [
			[ { 'size': [] }],
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ 'color': [] }, { 'background': [] }],
			[{ 'script': 'sub' }, { 'script': 'super' }],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			[{ 'indent': '-1' }, { 'indent': '+1' }],
			[{ 'direction': 'rtl' }],
			[{ 'align': [] }],
			['link', 'image', 'video'],
			['clean']
		];


		this.quill = new Quill('#editor-container', {
			theme: 'snow',
			placeholder: 'Type your content here...',
			modules: {
				toolbar: toolbarOptions
			}
		});

		const hiddenInput = document.getElementById('hidden-content');

		this.quill.root.innerHTML = hiddenInput.value;
		this.quill.on('text-change', () => {
			hiddenInput.value = this.quill.root.innerHTML;
		});
	}
};

export default Hooks;