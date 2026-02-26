import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if it's really the admin
    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.role !== "admin"
    ) {
      return res.status(403).json({ success: false, message: "Access denied. Invalid admin token." });
    }

    req.admin = decoded; // Optional: store decoded info in req
    next();

  } catch (error) {
    console.error("Admin auth error:", error);
    res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
}

export default adminAuth;
