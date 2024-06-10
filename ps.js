import bcrypt from "bcrypt"
const password = "h0dag@med6821!";
const salt = bcrypt.genSaltSync(10);
console.log("this is salt: "+salt);
const hash= bcrypt.hashSync(password, salt);
console.log("this is hash: " +hash);
//$2b$10$mPFFrSceDvQQyYhXRv1ROu
//$2b$10$ehHFhzMApTMGsv/4LdnHl.
const isEqual = await bcrypt.compare("password", hash);
console.log(isEqual);