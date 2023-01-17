// controller
import Users from "../model/user";

// get: http://localhost:3000/api/users
export async function getUsers(req, res) {
	try {
		const users = await Users.find({});

		if (!users) {
			return res.status(404).json({ error: "Data not Found" });
		} else {
			res.status(200).json(users);
		}
	} catch (error) {
		return res.status(404).json({ error: "Error While Fetching Data" });
	}
}

// get: http://localhost:3000/api/users/userId
export async function getUser(req, res) {
	try {
		const { userId } = req.query;

		console.log(userId);
		if (userId) {
			const user = await Users.findById(userId);
			res.status(200).json(user);
		} else {
			res.status(404).json({ error: "User not selected" });
		}
	} catch (error) {
		res.status(404).json({ error: "Can not get the User" });
	}
}

// post: http://localhost:3000/api/users
export async function postUser(req, res) {
	try {
		const formData = req.body;

		if (!formData) {
			return res.status(404).json({ error: "Form Data Not Provided...!" });
		} else {
			Users.create(formData, function (err, data) {
				return res.status(200).json(data);
			});
		}
	} catch (error) {
		return res.status(404).json({ error });
	}
}

// put: http://localhost:3000/api/users/{id}
export async function putUser(req, res) {
	try {
		const { userId } = req.query;
		const formData = req.body;

		if (userId && formData) {
			const user = await Users.findByIdAndUpdate(userId, formData);
			res.status(200).json(user);
		} else {
			res.status(404).json({ error: "User not selected..." });
		}
	} catch (error) {
		res.status(404).json({ error: "Error while updating the data" });
	}
}

// delete: http://localhost:3000/api/users/{id}
export async function deleteUser(req, res) {
	try {
		const { userId } = req.query;

		if (userId) {
			const user = await Users.findByIdAndDelete(userId);
			return res.stats(200).json(user);
		} else {
			res.status(404).json({ error: "User not selected" });
		}
	} catch (error) {
		res.status(404).json({ error: "Error while deleting the data" });
	}
}
