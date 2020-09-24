let chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
chai.use(require('chai-dom'))

const url= 'http://localhost:3000';

describe('GET: ',()=>{
  it('trae dos objetos', (done) => {
  chai.request(url)
  .get('/')
  .end( function(err,res){
  expect(res).to.have.status(200);
  expect(res.text).to.be.a('string');
  let problemStart = res.text.indexOf(`{"problem":`)
  let problemEnd = res.text.indexOf(`"+"]]}`)
  let problem = JSON.parse(res.text.slice(problemStart, problemEnd+6))
  let solutionStart = res.text.indexOf(`{"solution":`)
  let solutionEnd = res.text.lastIndexOf(`"+"]]}`)
  let solution = JSON.parse(res.text.slice(solutionStart, solutionEnd+6))

  expect(problem).to.be.a('object')
  expect(solution).to.be.a('object')
  done();
    });
  });
  it('los contenidos de los dos objetos tienen la misma longitud', (done) => {
    chai.request(url)
    .get('/')
    .end( function(err,res){
    let problemStart = res.text.indexOf(`{"problem":`)
    let problemEnd = res.text.indexOf(`"+"]]}`)
    let problem = JSON.parse(res.text.slice(problemStart, problemEnd+6))
    let solutionStart = res.text.indexOf(`{"solution":`)
    let solutionEnd = res.text.lastIndexOf(`"+"]]}`)
    let solution = JSON.parse(res.text.slice(solutionStart, solutionEnd+6))
    expect(problem.problem).to.have.length(solution.solution.length)
    done();
      });
    });

 });
