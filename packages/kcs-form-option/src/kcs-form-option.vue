<script>
export default {
  name: 'KcsFormOption',
  props: {
    formName: {
      type: String,
      default: 'FormName'
    },
    formItems: {
      type: Array,
      default: () => {
        return [
          {
            type: 'input',
            name: 'productName',
            label: '名称'
          }, {
            type: 'input',
            name: 'productName',
            label: '名称'
          }, {
            type: 'input',
            name: 'productName',
            label: '名称'
          }, {
            type: 'input',
            name: 'productName',
            label: '名称'
          }, {
            type: 'input',
            name: 'productName',
            label: '名称'
          }, {
            type: 'select',
            name: 'productType',
            label: '类型',
            dictGroupId: 'hfVf5uJjKutJjqKbFbV',
            dataList: [
              { id: '1', name: '1' }
            ]
          }
        ]
      }
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    rules: {
      type: Object
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    inline: {
      type: Boolean,
      default: true
    },
    isShowSearchBtn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    processor (item) {
      const type = this.replaceStr(item.type)
      const functionName = 'acquire' + type
      if (Object.prototype.hasOwnProperty.call(this, functionName)) {
        return this[functionName](item) // 拼接方法
      } else {
        throw new Error(`KcsFormOption:${item.type}错误不存在对应的方法:${functionName}`)
      }
    },
    replaceStr (str) {
      const reg = /\b(\w)|\s(\w)/g
      return str.replace(reg, function (m) {
        return m.toUpperCase()
      })
    },
    uploadSuccess (e) {
      this.$emit('uploadSuccess', e)
    },
    acquireInput (item) {
      return (
        <el-input
          type={item.type}
          style={item.style}
          show-password={item.showPassword}
          value={this.$attrs.value[item.name]}
          size={item.size ? item.size : 'small'}
          disabled={item.disabled ? item.disabled : false}
          clearable={item.clearable ? !item.clearable : true}
          maxlength={item.maxlength ? item.maxlength : 100}
          show-word-limit={item.showWordLimit ? item.showWordLimit : false}
          placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
          onInput={(e) => {
            this.$set(this.$attrs.value, item.name, e.trim())
          }}/>
      )
    },
    acquireTextarea (item) {
      return (
        <el-input
          type={item.type}
          style={item.style}
          rows={item.rows ? item.rows : 3}
          value={this.$attrs.value[item.name]}
          size={item.size ? item.size : 'small'}
          disabled={item.disabled ? item.disabled : false}
          autosize={item.autosize ? item.autosize : false}
          maxlength={item.maxlength ? item.maxlength : 100}
          show-word-limit={item.showWordLimit ? item.showWordLimit : false}
          placeholder={item.placeholder ? item.placeholder : '请输入' + item.label}
          onInput={(e) => {
            this.$set(this.$attrs.value, item.name, e)
          }}/>
      )
    },
    acquireSelect (item) {
      return (
        <el-select
          style={item.style}
          value={this.$attrs.value[item.name]}
          size={item.size ? item.size : 'small'}
          remote={item.remote ? !item.remote : true}
          multiple={item.multiple ? item.multiple : false}
          disabled={item.disabled ? item.disabled : false}
          clearable={item.clearable ? !item.clearable : true}
          filterable={item.multiple ? !item.filterable : true}
          placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
          filter-method={(e) => {
            item.filterMethod(e, item)
          }}
          onChange={(e) => {
            this.$set(this.$attrs.value, item.name, e)
          }}>
          {
            item.dataList.map(value => {
              return (
                <el-option
                  key={value.key}
                  label={value.label}
                  value={value.key}>
                </el-option>
              )
            })
          }
        </el-select>
      )
    },
    acquireDate (item) {
      return (
        <el-date-picker
          type={item.type}
          style={item.style}
          size={item.size ? item.size : 'small'}
          attrs={{ value: this.$attrs.value[item.name] }}
          disabled={item.disabled ? item.disabled : false}
          value-format={item.valueFormat ? item.valueFormat : 'timestamp'} // 默认时间戳格式
          placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
          change={item.change}
          onInput={(e) => {
            this.$set(this.$attrs.value, item.name, e)
          }}>
        </el-date-picker>
      )
    },
    acquireDateRange (item) {
      return (
        <el-date-picker
          style={item.style}
          type={item.type.toLowerCase()}
          value={this.$attrs.value[item.name]}
          size={item.size ? item.size : 'small'}
          end-placeholder="请选择结束日期"
          start-placeholder="请选择开始日期"
          disabled={item.disabled ? item.disabled : false}
          value-format={item.valueFormat ? item.valueFormat : 'timestamp'}
          range-separator={item.rangeSeparator ? item.rangeSeparator : '至'}
          change={item.change}
          onInput={(e) => {
            this.$set(this.$attrs.value, item.name, e)
          }}>
        </el-date-picker>
      )
    },
    acquireCascade (item) {
      return (
        <el-cascader
          style={item.style}
          options={item.options}
          value={this.$attrs.value[item.name]}
          size={item.size ? item.size : 'small'}
          disabled={item.disabled ? item.disabled : false}
          placeholder={item.placeholder ? item.placeholder : '请选择' + item.label}
          change={item.handleChange}/>
      )
    },
    acquireFile (item) {
      return (
        <custom-file-upload checkType={item.checkType ? !item.checkType : true} onOn-success={(e) => {
          this.uploadSuccess(e)
        }}/>
      )
    },
    showSearchBtn () {
      if (this.isShowSearchBtn) {
        return (
          <kcs-btn-list onBtnClick={(item) => {
            this.$emit('btnClick', item)
          }}/>
        )
      }
    }
  },
  render () {
    return (
      <div class="kcs-form-container">
        { this.showSearchBtn() }
        <el-form
          class="kcs-form"
          rules={this.rules}
          ref={this.formName}
          inline={this.inline}
          attrs={{ model: this.$attrs.value }}
          label-position={this.labelPosition}
          label-width={this.labelWidth + 'px'}>
          {this.formItems.map((item) => {
            return (
              <el-form-item
                prop={item.name}
                label={item.label}>
                {this.processor(item)}
              </el-form-item>
            )
          })}
        </el-form>
      </div>
    )
  }
}
</script>

<style scoped lang="less">
  .kcs-form-container {
    border: 1px solid #E2E2E2;
  }
  .kcs-form {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
  }
  .el-select {
    width: 100%;
  }
</style>
