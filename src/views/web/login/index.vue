<style lang="less">
    .index {
        padding-top: 100px;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: #f5f7f9;

        .ivu-tabs {
         background-color: #ffffff;
        }
    }

</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="6">
                <Tabs>
                    <TabPane label="登陆">
                        <login></login>
                    </TabPane>
                    <TabPane label="注册">
                        <register></register>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Login from '../../component/login';
    import Register from '../../component/register';

    export default {
        components: {
            Login,
            Register
        },
    };
</script>
