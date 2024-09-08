function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Ensure you replace 'resume.pdf' with the actual path to your resume file
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}