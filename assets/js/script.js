


//----------------------- About page ------------------

function generatePDF()
{
  console.log("Download button clicked");

  try 
  {
      // URL of the pre-stored PDF file
      const pdfUrl = 'assets/docs/GowrithangavelResume.pdf';

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Gowri_Thangavel_Resume.pdf';

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up and remove the link
      document.body.removeChild(link);
  } 
  catch (error) 
  {
      console.error('Error downloading PDF:', error);
  }
}


//-------------------------- Sidebar ------------------------

document.addEventListener('DOMContentLoaded', function() 
{
  const sidebarIcon = document.querySelector('.sidebar-icon');
  const sidebar = document.querySelector('#sidebar');
  const mainContent = document.querySelector('.main');

  sidebarIcon.addEventListener('click', function() 
  {
      if (window.innerWidth <= 768) 
        {
          sidebar.classList.toggle('show-sidebar');
          mainContent.classList.toggle('shifted-main');
      }
  });

  window.addEventListener('resize', function() 
  {
      if (window.innerWidth > 768) 
        {
          sidebar.classList.remove('show-sidebar');
          mainContent.classList.remove('shifted-main');
      }
  });
});