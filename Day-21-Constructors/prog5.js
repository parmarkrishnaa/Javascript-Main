class Company {
  constructor(cname, cid, cdept) {
    this.cname = cname;
    this.cid = cid;
    this.cdept = cdept;
  }
};

let com = new Company("Telsa", 101, "Development");

if (com.cname === "" || com.cname === undefined) {
  console.log("Enter your company name..");
} else {
  console.log(`"${com.cid}" "${com.cname}" "${com.cdept}"`);
}