

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await authService.register(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await authService.resetPassword(email);
    res.status(200).json({ message: 'Password reset link sent' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
