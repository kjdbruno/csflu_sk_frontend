<template>
    <div>
        <q-card class="no-shadow">
            <q-card-section>
                <div class="row items-center no-wrap">
                    <div class="col">
                        <div class="text-h5 text-capitalize">user</div>
                    </div>
                    <div class="col-auto">
                        <q-input outlined rounded dense debounce="300" v-model="filter" placeholder="Search...">
                            <template v-slot:prepend>
                                <q-icon name="search" />
                            </template>
                            <template v-slot:before>
                                <q-btn unelevated rounded size="md" color="primary" label="new" />
                            </template>
                        </q-input>
                    </div>
                </div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="q-pa-none">
                <q-table :rows="rows" :columns="columns" :filter="filter" class="no-shadow">
                    <template v-slot:body-cell-status="props">
                        <q-td :props="props">
                            <q-badge :color="props.row.status ? 'positive' : 'negative'" rounded class="q-mr-sm" />{{props.row.status ? 'ACTIVE' : 'INACTIVE'}}
                        </q-td>
                    </template>
                    <template v-slot:body-cell-action="props">
                        <q-td :props="props">
                            <!--display if status is active-->
                            <div class="q-gutter-xs">
                                <q-btn unelevated rounded size="sm" color="primary" label="modify" />
                                <q-btn unelevated rounded size="sm" color="primary" label="disable">
                                    <q-menu anchor="center middle" self="center right">
                                        <q-card class="no-shadow">
                                            <q-card-section class="row items-center no-wrap">
                                                <div>
                                                    <div class="text-uppercase text-weight-bold">disable!</div>
                                                    <div class="text-grey text-caption">Are you sure you want to disable this record?</div>
                                                </div>
                                                <q-space />
                                                <q-btn round size="sm" icon="check" color="green-3" unelevated v-close-popup>
                                                    <q-tooltip anchor="bottom middle" self="center middle">Yes</q-tooltip>
                                                </q-btn>
                                            </q-card-section>
                                        </q-card>
                                    </q-menu>
                                </q-btn>
                            </div>
                            <!--display if status is inactive-->
                            <div>
                                <q-btn unelevated rounded size="sm" color="primary" label="enable">
                                    <q-menu anchor="center middle" self="center right">
                                        <q-card class="no-shadow">
                                            <q-card-section class="row items-center no-wrap">
                                                <div>
                                                    <div class="text-uppercase text-weight-bold">enable!</div>
                                                    <div class="text-grey text-caption">Are you sure you want to enable this record?</div>
                                                </div>
                                                <q-space />
                                                <q-btn round size="sm" icon="check" color="green-3" unelevated v-close-popup>
                                                    <q-tooltip anchor="bottom middle" self="center middle">Yes</q-tooltip>
                                                </q-btn>
                                            </q-card-section>
                                        </q-card>
                                    </q-menu>
                                </q-btn>
                            </div>
                        </q-td>
                    </template>
                </q-table>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup>
/**
 * import vue
 */
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue-demi'
/**
 * declare table column
 */
const columns = ref([
    { name: 'status', label: '', field: '', sortable: false, align: 'left' },
    { name: 'id', label: 'EMPLOYEE NO.', field: 'employeeNo', sortable: false, align: 'center' },
    { name: 'name', label: 'NAME/USERNAME', field: 'name', sortable: false, align: 'left' },
    { name: 'office', label: 'OFFICE/POSITION', field: 'office', sortable: false, align: 'left' },
    { name: 'action', label: '', field: '', sortable: false, align: 'right' },
])
/**
 * declare table row: data
 */
const rows = ref([
    {
        id: 1,
        employeeNo: '2000001',
        name: 'Juan Dela Cruz',
        username: 'jdelacruz',
        office: 'Office of the City Mayor',
        position: 'Clerk I',
        status: 1,
    }
])
/**
 * declare table filter input
 */
const filter = ref('')
/**
 * declare inputs
 */

/**
 * declare errors
 */

/**
 * validate inputs
 */

/**
 * add button
 * -> display either modal/popup
 */

/**
 * create function:
 * -> use POST method
 */

/**
 * modify button:
 * -> display either modal/popup
 * -> populate input fields
 */

/**
 * update function:
 * -> use PUT method
 */

/**
 * disable function
 */

/**
 * enable function
 */

/**
 * get all data
 * -> use GET method
 */
</script>