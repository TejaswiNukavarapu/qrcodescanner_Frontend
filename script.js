document.addEventListener('DOMContentLoaded', () => {
    const uploadTrigger = document.getElementById('upload-trigger');
    const uploadModal = document.getElementById('upload-modal');
    const cameraOption = document.getElementById('camera-option');
    const galleryOption = document.getElementById('gallery-option');
    const fileInput = document.getElementById('file-input');
    const cameraInput = document.getElementById('camera-input');
    const uploadSubmit = document.getElementById('upload-submit');
    const successToast = document.getElementById('success-toast');
    const loadingOverlay = document.getElementById('loading-overlay');
    const imageView = document.getElementById('image-view');
    const productImage = document.getElementById('product-image');
    const uploadSection = document.getElementById('upload-section');

    let selectedFile = null;

    // Open Modal
    uploadTrigger.addEventListener('click', () => {
        uploadModal.classList.remove('hidden');
    });

    // Close Modal on overlay click
    uploadModal.addEventListener('click', (e) => {
        if (e.target === uploadModal) {
            uploadModal.classList.add('hidden');
        }
    });

    // Option Clicks
    cameraOption.addEventListener('click', () => {
        cameraOption.classList.add('selected');
        galleryOption.classList.remove('selected');
        cameraInput.click();
    });

    galleryOption.addEventListener('click', () => {
        galleryOption.classList.add('selected');
        cameraOption.classList.remove('selected');
        fileInput.click();
    });

    // Handle File Selection
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            selectedFile = file;
            uploadSubmit.classList.remove('disabled');
        }
    };

    fileInput.addEventListener('change', handleFile);
    cameraInput.addEventListener('change', handleFile);

    // Upload & Continue Logic
    uploadSubmit.addEventListener('click', async () => {
        if (!selectedFile) return;

        // Hide modal
        uploadModal.classList.add('hidden');

        // Show Loading
        loadingOverlay.classList.remove('hidden');

        try {
            // CLOUDINARY INTEGRATION
            // To use real Cloudinary upload:
            // 1. Uncomment the code below
            // 2. Replace 'your_cloud_name' and 'your_unsigned_preset'

            /*
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', 'your_unsigned_preset');
            
            const response = await fetch(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log('Uploaded to Cloudinary:', data.secure_url);
            productImage.src = data.secure_url;
            */

            // SIMULATION for demo purposes
            await new Promise(resolve => setTimeout(resolve, 2000));

            loadingOverlay.classList.add('hidden');

            // Show Success Toast
            successToast.classList.remove('hidden');

            // Hide Success Toast after 5 seconds
            setTimeout(() => {
                successToast.classList.add('hidden');

                // Show the image in the UI
                const reader = new FileReader();
                reader.onload = (e) => {
                    productImage.src = e.target.result;
                    imageView.classList.remove('hidden');
                    uploadSection.classList.add('hidden'); // Hide the upload button once done
                };
                reader.readAsDataURL(selectedFile);

            }, 5000);

        } catch (error) {
            console.error('Upload failed:', error);
            loadingOverlay.classList.add('hidden');
            alert('Upload failed. Please try again.');
        }
    });

    // Back button reset demo
    document.querySelector('.back-btn').addEventListener('click', () => {
        imageView.classList.add('hidden');
        uploadSection.classList.remove('hidden');
        selectedFile = null;
        uploadSubmit.classList.add('disabled');
        cameraOption.classList.remove('selected');
        galleryOption.classList.remove('selected');
    });
});
