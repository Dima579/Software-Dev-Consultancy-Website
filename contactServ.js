window.addEventListener('DOMContentLoaded', () => 
    {
    const params = new URLSearchParams(window.location.search);
    const enquiry = params.get('enquire');

    if (enquiry) 
        {
        const reasonSelect = document.getElementById('reason');
        if (reasonSelect) 
            {
                reasonSelect.value = enquiry;
            }
        }
  });