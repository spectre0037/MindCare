const bcrypt = require('bcryptjs');
const Doctor = require('../model/Doctors');  // Ensure the path is correct

// Controller function to handle doctor sign-up
const signUpDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;

    // Check if doctor already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ error: 'Doctor already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new doctor
    const newDoctor = new Doctor({
      name,
      email,
      password: hashedPassword,
      specialization,
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor signed up successfully' });
  } catch (error) {
    console.error('Error signing up doctor:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signUpDoctor };  // Ensure proper export
