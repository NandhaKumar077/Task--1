// function - Toggle the SideBar
function toggleSidebar() {
    const sidebar = document.getElementById("body");
    const toggleImage = document.querySelector(".toggle-image");
    
    if (sidebar.style.transform === "translateX(-20px)") {
        //function - Show SideBar
        sidebar.style.transform = "translateX(0)";
        toggleImage.style.left = "220px"; // Move the image inside
    } else {
        //function - Hide SideBar
        sidebar.style.transform = "translateX(-20px)";
        toggleImage.style.left = "220px"; // Move the image outside
    }
}



// function - Update the Path of the Website On the Top

function updatePath(path) {
    const breadcrumb = document.getElementById('path');
    breadcrumb.textContent = path;
}

// function - Time method
function getCurrentDateTime() {
    const currentDate = new Date();
    const optionsDate = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // Display time in 12-hour format with am/pm
    };
    const date = currentDate.toLocaleString('en-US', optionsDate);
    const time = currentDate.toLocaleString('en-US', optionsTime);
    return `${date} | ${time}`;
}


//function - Display the Time on the Top
window.onload = function() {
    const currentDateElement = document.getElementById('current-date');
    const currentDate = getCurrentDateTime();
    currentDateElement.textContent = currentDate;
};


//function - In (+ Add New Vehicle) Update Vehicles Details.
function DetailsForm() {
const formContainer = document.getElementById("form-container");
const overlay = document.getElementById("overlay");
formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
}

//function - Add the Details to Table from the Form.
function addDetails() {
    const newRow = document.createElement("tr");

    const columnNames = ["serialNo", "registrationNo", "vehicleId", "vehicleType", "ownerName", "phoneNo", "emailaddr", "brand", "model", "engaged", "registeredDate", "inspectionStatus", "vehicleState", "action"];
    const columnTypes = ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "select", "select11", "text1"];

    for (let i = 0; i < columnNames.length; i++) {
        const cell = document.createElement("td");

        if (columnTypes[i] === "select") {
            const select = document.createElement("select");

            select.innerHTML = `
                <option value="Inspected">Inspected</option>
                <option value="Pending">Pending</option>
                <option value="Client Approved">Client Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Incomplete">Incomplete</option>
            `;
            cell.appendChild(select);
        } 
        else if (columnTypes[i] === "select11") {
            const select = document.createElement("select");
            select.innerHTML = `
                 <select id="select1">
                <option  style="color:orange;" value="Pending">Inspected</option>
                <option  style="color:blue;" value="Inspected">Pending</option>
                <option  style="color:green;" value="Client Approved">Client Approved</option>
                <option  style="color:red;" value="Rejected">Rejected</option>
                <option  style="color:rgb(119, 88, 11);" value="Incomplte">Incomplte</option>
            </select>
            `;
            cell.appendChild(select);
        } 
        else if (columnTypes[i] === "text1") {
            // Create a container div for the action icons
            const actionContainer = document.createElement("div");
            
            // Create anchor elements and images for the action icons
            const action1 = document.createElement("a");
            const action2 = document.createElement("a");
            const action3 = document.createElement("a");
            
            const image1 = document.createElement("img");
            const image2 = document.createElement("img");
            const image3 = document.createElement("img");
            
            // Set style for image1 in Action Box
            image1.src = "Images/eye.png";
            image1.alt = "check";
            image1.width = "10";
            image1.height = "10";
            image1.style.backgroundColor = "blue";
            image1.style.padding = "3px"; 
            image1.style.marginRight = "2px"
            image1.style.borderRadius="0.2rem"
            
            // Set style for image2 in Action Box
            image2.src = "Images/pen.png";
            image2.alt = "write";
            image2.width = "10";
            image2.height = "10";
            image2.style.backgroundColor = "rgb(202, 202, 4)"; // Add a background color
            image2.style.padding = "3px"; // Add padding
            image2.style.marginRight = "2px"
            image2.style.borderRadius="0.2rem"
            
            // Set style for image3 in Action Box
            image3.src = "Images/trash.png";
            image3.alt = "delete";
            image3.width = "10";
            image3.height = "10";
            image3.style.backgroundColor = "red"; // Add a background color
            image3.style.padding = "3px"; // Add padding
            image3.style.borderRadius="0.2rem"


            action1.href = "";
            action2.href = "";
            action3.href = "";
            
            action1.appendChild(image1);
            action2.appendChild(image2);
            action3.appendChild(image3);
            
            actionContainer.appendChild(action1);
            actionContainer.appendChild(action2);
            actionContainer.appendChild(action3);
            
            cell.appendChild(actionContainer);
        } 
        else {
            const inputField = document.getElementById(columnNames[i]);
            const inputValue = inputField.value;
            cell.textContent = inputValue;
        }

        newRow.appendChild(cell);
    }

    // Add the new row to the table
    document.getElementById("tables-body").appendChild(newRow);

    closeForm();
}


// function - to close the form
function closeForm() {
    const formContainer = document.getElementById("form-container");
    const overlay = document.getElementById("overlay");
    formContainer.style.display = "none";
    overlay.style.display = "none";
}

// function - Change the Profile File
function changeProfilePhoto(input) {
    const profilePhoto = document.getElementById('profile-photo');
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePhoto.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}