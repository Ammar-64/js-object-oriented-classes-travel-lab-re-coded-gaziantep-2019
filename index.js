class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date();
  }
  yearsExperienceFromBeginningOf(){
    return this.startDate - new Date;
  }
}
