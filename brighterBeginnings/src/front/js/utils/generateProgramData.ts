export const generateDescription = (childName: string, defaultDescription: string) => {

  if (defaultDescription.includes("infant")) {
    defaultDescription = defaultDescription.replaceAll("your infant", childName);
    defaultDescription = defaultDescription.replaceAll("Your infant", childName);
  }

  if (defaultDescription.includes("toddler")) {
    defaultDescription = defaultDescription.replaceAll("your toddler", childName);
    defaultDescription = defaultDescription.replaceAll("Your toddler", childName);
  }

  if (defaultDescription.includes("preschooler")) {
    defaultDescription = defaultDescription.replaceAll("your preschooler", childName);
    defaultDescription = defaultDescription.replaceAll("Your preschooler", childName);
  }

  return defaultDescription;
};
  