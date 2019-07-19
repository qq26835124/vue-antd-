<template lang="html">
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <a-checkbox
        :indeterminate="indeterminate"
        @change="onCheckAllChange"
        :checked="checkAll"
      >
        Check all
      </a-checkbox>
    </div>
    <br />
    <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
  </div>
</template>

<script>
  export default {
    props: ['plainOptions','defaultCheckedList'],
    data () {
      return {
        indeterminate: true,
        checkAll: false,
        checkedList: this.$props.defaultCheckedList
      }
    },
    created(){
      this.indeterminate = !!this.checkedList.length && (this.checkedList.length < this.$props.plainOptions.length);
      this.checkAll = this.checkedList.length === this.$props.plainOptions.length;
    },
    methods: {
      onChange (checkedList) {
        this.indeterminate = !!checkedList.length && (checkedList.length < this.$props.plainOptions.length)
        this.checkAll = checkedList.length === this.$props.plainOptions.length
      },
      onCheckAllChange (e) {
        Object.assign(this, {
          checkedList: e.target.checked ? this.$props.plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        })
      },
    },
  }
</script>

<style lang="css" scoped>

</style>