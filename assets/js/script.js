


//----------------------- About page ------------------

function generatePDF() 
{
  console.log("Download button clicked");

  try 
  {
      // Create new jsPDF instance
      var doc = new jsPDF();

      // Add content to the PDF
      doc.text(20, 20, 'Gowri thangavel Resume');

      // Save the PDF
      doc.save('Gowri thangavel Resume.pdf');
  } 
  catch (error) 
  {
      console.error('Error generating PDF:', error);
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