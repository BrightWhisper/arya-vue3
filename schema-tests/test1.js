const Ajv = require('ajv').default
const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')
const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
require('ajv-errors')(ajv /*, {singleError: true,keepErrors: true} */)

// ajv.addFormat('test1', (data) => {
//   console.log(data, '-----')
//   return data === 'ahaha'
// })

// ajv.addKeyword({
//   keyword: 'test2',
//   validate: function fun(schema, data) {
//     console.log(schema, data, '23456')
//     return false
//   },
// })

// ajv.addKeyword({
//   keyword: 'test3',
//   compile(sch, parentSchema) {
//     console.log(sch, parentSchema)
//     return () => true
//   },
//   metaSchema: {
//     type: 'boolean',
//   },
// })

ajv.addKeyword({
  keyword: 'test4',
  macro() {
    return {
      minLength: 10,
    }
  },
})

const schema = {
  type: 'object',
  required: ['name', 'age'],
  properties: {
    name: {
      type: 'string',
      test4: true,
      errorMessage: {
        type: '类型错误',
        test4: '啥都错了',
      },
      //   format: 'text',
      //   minLength: 10,
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    pp: {
      type: 'array',
      items: [
        {
          type: 'string',
        },
        {
          type: 'integer',
        },
      ],
    },
    isWorker: {
      type: 'boolean',
    },
  },
}

const data = {
  name: 'a',
  age: 2,
  pets: ['23', '23'],
  pp: ['23', 24],
  isWorker: false,
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {
  //   localize.zh(validate.errors)
  console.log(validate.errors)
}
