function introduction(name) {
  return `Hi, my name is ${name}.`;
  }
  let name = "Aki";
  expect(introduction("Aki")).toEqual("Hi, my name is Aki.");
  console.log(introduction("Aki"));

  function introductionWithLanguage(name1, language) {
    return `Hi, my name is ${name1} and I am learning to program in ${language}.`;
  }
  let name1 = "Aki";
  let language = "English";
  console.log(introductionWithLanguage("Aki", "English"));

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is Gracie and I am learning to program in ${language}.`
    console.log(`Hi, my name is Gracie and I am learning to program in ${language}.`);
  }