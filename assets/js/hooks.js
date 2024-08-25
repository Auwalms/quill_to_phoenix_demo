
let Hooks = {};

Hooks.QuillEditor = {
	mounted() {
		this.initializeQuill();
	},
	updated() {
		this.initializeQuill();
	},
	initializeQuill() {
		var toolbarOptions = [
			[{ 'font': [] }, { 'size': [] }],
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
			// modules: {
			// 	toolbar: toolbarOptions,
			// 	// imageResize: {}
			// }
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