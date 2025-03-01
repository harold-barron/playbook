const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Exercises
// 1.-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(expName => console.log(expName.name))

// 2.Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(expStack => console.log(expStack.stack))

// 3.-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStack=explorers.map(ExplorerStackNewList => ExplorerStackNewList.stack)
console.log(explorerStack)

// 4.-Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorerWithJS = explorers.filter ((explorerJS) => explorerJS.stack.includes('js'))
console.log(explorerWithJS)

// 5.-Busca el primer explorer que sea de la CDMX, usa FIND
const FirstExplorerCdmx = explorers.find ((explorerCity) => explorerCity.city === "CDMX")
console.log(FirstExplorerCdmx)

// 6.- Obtén la suma de todos los exercises_completed, usa REDUCE
const sum_exercises_completed  = explorers.reduce((acc,sum) => acc + sum.exercises_completed,0)
console.log(sum_exercises_completed)

// 7.-Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const exercise_Finished = explorers.some((explorerFinished) => explorerFinished.missions.frontend.exercisesFinished === true)
console.log(exercise_Finished)

// 8.-Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const is_finished = explorers.every((explorer_is_finished) => explorer_is_finished.missions.onboarding.isFinished === true)
console.log(is_finished)