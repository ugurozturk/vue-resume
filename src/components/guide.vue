<template>
        <div class="guide">
            <ul>
                <li>
                    <img src="../assets/guide_click_left.png" height="30" width="30" alt>
                    <div class="desc">
                        <h5>İçeriliğe tıklayarak</h5>
                        <p>Kendinize göre düzenleme yapabilirsiniz</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/guide_click_right.png" height="30" width="30" alt>
                    <div class="desc">
                        <h5>Sağ tıklayarak</h5>
                        <p>Silebilirsiniz</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/guide_add.png" height="30" width="30" alt>
                    <div class="desc">
                        <h5>Ekle Butonuna Tıklayarak</h5>
                        <p>Yeni içerik ekleyebilirsiniz</p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>
    export default {
        name: 'Guide'
    }
</script>
<style lang="less">
    .guide {
        border: 1px solid #dad8d7;
        width: 790px;
        margin-top: 15px;
        height: 80px;

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            li {
                display: flex;
                align-items: center;

                img {
                    margin: 0 10px;
                }

                h5 {
                    margin: 0 0 6px 0;
                }

                p {
                    margin: 0;
                    font-size: 12px;
                }
            }
        }
    }

</style>
