const options = [
    { value: '', label: 'Select your location' },
    { value: 'Kakanj', label: 'Kakanj' },
    { value: 'Sarajevo', label: 'Sarajevo' },
    { value: 'Zenica', label: 'Zenica' },
    { value: 'Vitez', label: 'Vitez' },
];

export const personalDetailsInputFields = [
    {
        name: "profileImage",
        label: "Profile Image*",
        type: "file",
        rules: { required: "Profile image is required" },
    },
    {
        name: "phoneNumber",
        label: "Phone number*",
        placeholder: "+387",
        type: "number",
        rules: { required: "Phone number is required" },
    },
    {
        name: "location",
        label: "Location*",
        placeholder: "Select your location",
        type: "select",
        options: options,
        rules: {
            required: "Location is required",
            validate: (value: any) => value?.value !== "" || "Please select a valid location",
        },
    },
    {
        name: 'experience',
        label: 'Experience*',
        placeholder: "Enter your experience",
        type: "number",
        rules: { required: "Experience is required" },
    },
    {
        name: 'numberOfWorkers',
        label: 'Employees',
        placeholder: "Enter number of employees",
        type: "number",
    },
    {
        name: 'numberOfServiceBays',
        label: 'Service Bays*',
        placeholder: "Enter number of service bays",
        type: "number",
    },
]