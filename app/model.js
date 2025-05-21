let idCounter = 1;

class Section {
  id;
  title;
  object;
  secret;

  constructor (title, object, secret) {
    this.id = idCounter;
    this.title = title;
    this.object = object;
    this.secret = secret;
    
    idCounter++;
  }
}

export default Section;