const merge = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let mn = m + n - 1;

    while (i >= 0 && j >= 0) {
        nums1[mn--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }

    while (j >= 1) {
        nums1[mn--] = nums2[j--];
    }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Результат: [1, 2, 2, 3, 5, 6]
