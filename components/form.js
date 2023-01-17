import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

const Form = () => {
	let flag = false;

	return flag ? <AddUserForm /> : <UpdateUserForm />;
};

export default Form;
