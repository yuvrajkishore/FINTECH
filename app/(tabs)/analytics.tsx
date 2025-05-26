import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { ArrowDown, ArrowUp, ChevronDown, ChevronRight, DollarSign, ChartPie as PieChart, TrendingUp, ShoppingBag, Coffee, Chrome as Home, Car, Film, HeartPulse } from 'lucide-react-native';

export default function AnalyticsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [expenseView, setExpenseView] = useState('category');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const spendingData = [15000, 22000, 18000, 26000, 19000, 24000, 35000, 28000, 31000, 27000, 24500, 32000];
  const incomeData = [45000, 45000, 45000, 48000, 45000, 45000, 45000, 50000, 45000, 45000, 45000, 45000];

  const categoryData = [
    { name: 'Shopping', percentage: 35, amount: 8575, icon: <ShoppingBag color="#6366F1" size={20} />, color: '#6366F1' },
    { name: 'Food & Dining', percentage: 25, amount: 6125, icon: <Coffee color="#F59E0B\" size={20} />, color: '#F59E0B' },
    { name: 'Housing', percentage: 20, amount: 4900, icon: <Home color="#10B981" size={20} />, color: '#10B981' },
    { name: 'Transportation', percentage: 10, amount: 2450, icon: <Car color="#EC4899\" size={20} />, color: '#EC4899' },
    { name: 'Entertainment', percentage: 5, amount: 1225, icon: <Film color="#8B5CF6" size={20} />, color: '#8B5CF6' },
    { name: 'Healthcare', percentage: 5, amount: 1225, icon: <HeartPulse color="#EF4444\" size={20} />, color: '#EF4444' },
  ];

  const toggleExpenseView = () => {
    setExpenseView(expenseView === 'category' ? 'merchant' : 'category');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Financial Analytics</Text>
        <Pressable style={styles.periodSelector}>
          <Text style={styles.periodText}>{selectedPeriod}</Text>
          <ChevronDown color="#1F2937" size={20} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Summary Cards */}
        <View style={styles.summaryCards}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryCardHeader}>
              <Text style={styles.summaryCardTitle}>Income</Text>
              <ArrowUp color="#10B981" size={16} />
            </View>
            <Text style={styles.summaryCardAmount}>₹45,000</Text>
            <Text style={[styles.summaryCardChange, styles.positiveChange]}>+5% from last month</Text>
          </View>
          
          <View style={styles.summaryCard}>
            <View style={styles.summaryCardHeader}>
              <Text style={styles.summaryCardTitle}>Expenses</Text>
              <ArrowDown color="#EF4444" size={16} />
            </View>
            <Text style={styles.summaryCardAmount}>₹24,500</Text>
            <Text style={[styles.summaryCardChange, styles.negativeChange]}>+12% from last month</Text>
          </View>
        </View>

        {/* Monthly Trend Chart */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Monthly Trend</Text>
            <TrendingUp color="#6366F1" size={20} />
          </View>
          
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#6366F1' }]} />
              <Text style={styles.legendText}>Expenses</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#10B981' }]} />
              <Text style={styles.legendText}>Income</Text>
            </View>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chartContainer}>
            {months.map((month, index) => (
              <View key={index} style={styles.chartColumn}>
                <View style={styles.chartBars}>
                  <View style={styles.barContainer}>
                    <View 
                      style={[
                        styles.bar, 
                        { 
                          height: (spendingData[index] / Math.max(...incomeData)) * 150,
                          backgroundColor: '#6366F1' 
                        }
                      ]} 
                    />
                  </View>
                  <View style={styles.barContainer}>
                    <View 
                      style={[
                        styles.bar, 
                        { 
                          height: (incomeData[index] / Math.max(...incomeData)) * 150,
                          backgroundColor: '#10B981' 
                        }
                      ]} 
                    />
                  </View>
                </View>
                <Text style={styles.chartLabel}>{month}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Expense Breakdown */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Expense Breakdown</Text>
            <Pressable style={styles.viewToggle} onPress={toggleExpenseView}>
              <Text style={styles.viewToggleText}>
                View by {expenseView === 'category' ? 'Merchant' : 'Category'}
              </Text>
              <ChevronRight color="#6366F1" size={16} />
            </Pressable>
          </View>
          
          <View style={styles.pieChartContainer}>
            <View style={styles.pieChart}>
              <View style={styles.pieChartCenter}>
                <Text style={styles.pieChartCenterText}>₹24,500</Text>
                <Text style={styles.pieChartCenterLabel}>Total</Text>
              </View>
              {/* This is a simplified representation of a pie chart */}
              {categoryData.map((category, index) => (
                <View
                  key={index}
                  style={[
                    styles.pieChartSegment,
                    {
                      backgroundColor: category.color,
                      transform: [
                        { rotate: `${index * (360 / categoryData.length)}deg` },
                      ],
                      opacity: index === 0 ? 1 : 0.8 - (index * 0.1),
                    },
                  ]}
                />
              ))}
            </View>
          </View>
          
          <View style={styles.categoryList}>
            {categoryData.map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                  {category.icon}
                </View>
                <View style={styles.categoryDetails}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <View style={styles.categoryProgressBar}>
                    <View 
                      style={[
                        styles.categoryProgressFill, 
                        { 
                          width: `${category.percentage}%`,
                          backgroundColor: category.color 
                        }
                      ]} 
                    />
                  </View>
                </View>
                <View style={styles.categoryValues}>
                  <Text style={styles.categoryPercentage}>{category.percentage}%</Text>
                  <Text style={styles.categoryAmount}>₹{category.amount}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Savings Goal */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Savings Goal</Text>
            <Pressable>
              <Text style={styles.editText}>Edit</Text>
            </Pressable>
          </View>
          
          <View style={styles.savingsCard}>
            <View style={styles.savingsCardHeader}>
              <View style={styles.savingsIconContainer}>
                <DollarSign color="#FFFFFF" size={20} />
              </View>
              <Text style={styles.savingsTitle}>Emergency Fund</Text>
            </View>
            
            <View style={styles.savingsProgress}>
              <View style={styles.savingsProgressBar}>
                <View style={styles.savingsProgressFill} />
              </View>
              <View style={styles.savingsProgressLabels}>
                <Text style={styles.savingsProgressText}>₹120,000 of ₹300,000</Text>
                <Text style={styles.savingsProgressPercentage}>40%</Text>
              </View>
            </View>
            
            <View style={styles.savingsEstimate}>
              <Text style={styles.savingsEstimateLabel}>Estimated completion</Text>
              <Text style={styles.savingsEstimateValue}>October 2024</Text>
            </View>
          </View>
        </View>
        
        {/* Budget Recommendations */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Budget Recommendations</Text>
          </View>
          
          <View style={styles.recommendationCard}>
            <View style={styles.recommendationHeader}>
              <PieChart color="#6366F1" size={20} />
              <Text style={styles.recommendationTitle}>Reduce dining expenses</Text>
            </View>
            <Text style={styles.recommendationDescription}>
              Your dining expenses are 25% higher than last month. Consider cooking at home more often to save money.
            </Text>
            <Pressable style={styles.recommendationButton}>
              <Text style={styles.recommendationButtonText}>Set Budget</Text>
            </Pressable>
          </View>
          
          <View style={styles.recommendationCard}>
            <View style={styles.recommendationHeader}>
              <TrendingUp color="#6366F1" size={20} />
              <Text style={styles.recommendationTitle}>Increase savings rate</Text>
            </View>
            <Text style={styles.recommendationDescription}>
              You're currently saving 15% of your income. Try to increase it to 20% to reach your emergency fund goal faster.
            </Text>
            <Pressable style={styles.recommendationButton}>
              <Text style={styles.recommendationButtonText}>Adjust Savings</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1F2937',
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  periodText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1F2937',
    marginRight: 4,
  },
  summaryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  summaryCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryCardTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  summaryCardAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 4,
  },
  summaryCardChange: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  viewToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewToggleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
    marginRight: 4,
  },
  chartLegend: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  chartContainer: {
    paddingBottom: 16,
    height: 200,
  },
  chartColumn: {
    alignItems: 'center',
    marginRight: 16,
    width: 60,
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 150,
  },
  barContainer: {
    width: 20,
    height: 150,
    justifyContent: 'flex-end',
    marginHorizontal: 2,
  },
  bar: {
    width: 20,
    borderRadius: 4,
  },
  chartLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  pieChartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pieChart: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },
  pieChartSegment: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    left: 50,
    top: 0,
    transformOrigin: '50% 100%',
  },
  pieChartCenter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  pieChartCenterText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  pieChartCenterLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  categoryList: {
    marginTop: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryDetails: {
    flex: 1,
    marginRight: 12,
  },
  categoryName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 6,
  },
  categoryProgressBar: {
    height: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
  },
  categoryProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  categoryValues: {
    alignItems: 'flex-end',
  },
  categoryPercentage: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 2,
  },
  categoryAmount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  editText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  savingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  savingsCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  savingsIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  savingsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  savingsProgress: {
    marginBottom: 16,
  },
  savingsProgressBar: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    marginBottom: 8,
  },
  savingsProgressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  savingsProgressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savingsProgressText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  savingsProgressPercentage: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6366F1',
  },
  savingsEstimate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  savingsEstimateLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  savingsEstimateValue: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#1F2937',
  },
  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  recommendationTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 12,
  },
  recommendationDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  recommendationButton: {
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  recommendationButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
});